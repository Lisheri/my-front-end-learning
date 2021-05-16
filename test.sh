yarn build

git checkout gh-pages

cp -R public/* ./

git add .

git commit -m "update"

git push

git checkout main

