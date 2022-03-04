import { execSync } from 'child_process';
import { series, task } from 'just-task';

interface Tasks {
  [taskName: string]: string;
}

function registerTasks(tasks: Tasks): void {
  Object.keys(tasks).forEach((taskName) => {
    task(taskName, () => {
      // Some tools (Jest, Rollup, typedoc, Storybook, etc) print non-error output to stderr, which
      // causes Rush to flag the build as "successful with warnings". To work around these issues,
      // we first execute the command by sending stderr to a black hole. If the task failed, then
      // we run it again, but keep stderr so that it bubbles up to the user.

      try {
        execSync(tasks[taskName], { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] });
      } catch (error) {
        execSync(tasks[taskName], { encoding: 'utf-8' });
      }
    });
  });
}

registerTasks({
  'build:docs': 'typedoc',
  'build:tool': 'node esbuild.config.js',
  'clean': 'rimraf .jest-cache *.log coverage dist docs',
  'lint': 'eslint --max-warnings 0 --ext .js,.ts *.js src',
  'prettier': 'prettier --check *.js *.json src',
  'test': 'jest --coverage',
  'type-check': 'tsc --noEmit',
});

task(
  'build',
  series('clean', 'lint', 'prettier', 'test', 'type-check', 'build:tool', 'build:docs'),
);
