# use an existing docker image as a base
FROM node:14-alpine

# 放進 user 資料夾中，避免不小心覆蓋檔案
WORKDIR /usr/app

# Download and install dependencies
# 第一步只複製 package.json 讓其他檔案修改時不會影響到 reBuild 時 npm install 的 cache，造成重新安裝
COPY ./package.json ./
# Download and install a dependency
RUN npm install
COPY ./ ./
# Tell the image what to do when it starts as a container
CMD ["npm","run","dev"]