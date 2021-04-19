#!/usr/bin/env bash

ESC="\033"
GREEN="${ESC}[32m"
RED="${ESC}[31m"
NORMAL="\e[0m"
PASS="${GREEN}PASS${NORMAL}"
FAIL="${RED}FAIL${NORMAL}"
LOGFILE="task-output.log"

tasks=(
  clean
  prettier
  lint
  test
  type-check
  build:tool
  build:docs
)

failed=0
buildStart=`date +%s`

for task in "${tasks[@]}"
do
  taskStart=`date +%s`
  yarn run $task &> $LOGFILE
  ret=$?
  taskEnd=`date +%s`
  taskElapsed=`expr $taskEnd - $taskStart`
  msgSuffix="${task} (${taskElapsed}s)"

  if [ $ret -eq 0 ]
  then
    echo -e "${PASS} ${msgSuffix}"
  else
    echo -e "${FAIL} ${msgSuffix}"
    echo
    cat $LOGFILE
    echo
    failed=1
  fi

  rm -f $LOGFILE
done

buildEnd=`date +%s`
buildElapsed=`expr $buildEnd - $buildStart`
echo
echo "Total build time: ${buildElapsed}s"

exit $failed
