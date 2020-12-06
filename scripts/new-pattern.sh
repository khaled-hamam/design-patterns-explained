#!/bin/bash

read -p "Enter The Pattern Name: " pattern_name

patterns_families=("Behavioral" "Creational" "Structural")

echo "To which family does the pattern belong:"
select family in ${patterns_families[*]}; do
  if [[ ! " ${patterns_families[@]} " =~ " ${family} " ]]; then
      echo "You chose a wrong family"
      break
  fi

  directory=`echo "library/$family-patterns/$pattern_name" | awk '{ print tolower($1) }'`
  echo "Creating pattern directory ($directory)"
  mkdir $directory

  echo "Copying template files"
  cp PATTERN_TEMPLATE.md "$directory/README.md"
  mkdir $directory/figures
  touch $directory/figures/structure.drawio.svg

  mkdir $directory/example-1
  touch $directory/example-1/index.ts
  echo "# Example 1" > $directory/example-1/README.md
  echo "describe('${pattern_name} Pattern', () => {});" > $directory/example-1/index.test.ts

  sed -i "" "s/Pattern Name/${pattern_name} Pattern/" $directory/README.md

  echo "Don't forget to add the pattern in the patterns catalogue and SUMMARY.md"
  break
done
