#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
echo 'blog.65style.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git config --local user.name "65style"
git config --local user.email "lym210119@gmail.com"

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:65style/65style.github.io.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 如果使用 travis 持续集成
# git push -f https://${GITHUB_TOKEN}/65style/65style.github.io.git master:gh-pages

cd -