#!/bin/sh
# 容器启动时根据环境变量生成 H5 的 _app.config.js
#   API_BASE_URL：后端接口地址，不填时默认用「当前访问的主机 + 80 端口」
#   SHARE_URL：H5 访问地址（分享链接用），不填时默认用当前访问地址
set -e
CONFIG=/usr/share/nginx/html/_app.config.js

if [ -n "$API_BASE_URL" ]; then
  API="\"$API_BASE_URL\""
else
  API='location.protocol + "//" + location.hostname'
fi

if [ -n "$SHARE_URL" ]; then
  SHARE="\"$SHARE_URL\""
else
  SHARE='location.origin'
fi

echo "window._appConfig = {\"API_BASE_URL\": $API, \"SHARE_URL\": $SHARE};" > "$CONFIG"
echo "qiaoqiaoyun-h5: $(cat $CONFIG)"
