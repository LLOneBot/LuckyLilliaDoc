cd ..
mkdir temp
GITHUB_URL=https://oauth:${LLOneBot_GH_TOKEN}@github.com/LLOneBot/llonebot.github.io
git clone ${GITHUB_URL} temp
mv ./LLOneBotDoc/docs/.vitepress/* temp
cd ./temp
git config --global user.name "Mlikiowa"
git config --global user.email "nanaeonn@outlook.com"
git add *
git commit -m "Automatic generation"
git push -f