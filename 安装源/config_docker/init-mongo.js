db = db.getSiblingDB('qiaoqiaoyun'); // 切换到 qiaoqiaoyun 数据库
db.createUser({
  user: 'admin',
  pwd: '123456',
  roles: [{ role: 'readWrite', db: 'qiaoqiaoyun' }]
});