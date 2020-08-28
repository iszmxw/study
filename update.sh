#!/bin/sh

echo -e "\033[35m 准备更新 \033[0m"
# echo -e "\033[32m -------------------------------  git status  ------------------------------- \033[0m"
# git status
# echo -e "\033[34m -------------------------------  git add .  -------------------------------- \033[0m"
git add .
# echo -e "\033[35m -------------------------------  git commit -m '更新文档'  ------------- \033[0m"
git commit -m '更新文档'
# echo -e "\033[33m -------------------------------  git pull origin vuepress  ------------------- \033[0m"
git pull origin vuepress
# echo -e "\033[36m -------------------------------  git push origin vuepress  ------------------- \033[0m"
git push origin vuepress

echo -e "\033[35m 更新结束 \033[0m"

# read