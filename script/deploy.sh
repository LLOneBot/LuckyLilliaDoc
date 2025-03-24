cd ..
mkdir temp
GITHUB_URL=https://oauth:${LLOneBot_GH_TOKEN}@github.com/LLOneBot/llonebot.github.io
git clone ${GITHUB_URL} temp

rm -rf temp/*
mv ./LLOneBotDoc/docs/.vitepress/dist/* temp

cd ./temp

git config --global init.defaultBranch main
git remote add origin ${GITHUB_URL}
git branch -M main

git config --global user.name "linyuchen"
git config --global user.email "lin.yu.chen@hotmail.com"
git add *
git commit -m "docs: auto update"
git push -f