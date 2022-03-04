require('esbuild')
  .build({
    bundle: true,
    entryPoints: ['src/find-words.ts'],
    external: Object.keys(require('./package.json').dependencies),
    format: 'cjs',
    minify: true,
    outdir: 'dist',
    platform: 'node',
    target: ['node16'],
  })
  .catch(() => process.exit(1));
