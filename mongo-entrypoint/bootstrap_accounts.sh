#!/usr/bin/env bash
echo "Creating mongo users..."
mongo admin \
--host localhost \
-u $MONGO_INITDB_ROOT_USERNAME \
-p $MONGO_INITDB_ROOT_PASSWORD \
<< EOF
use loradb;
db.createUser({
  user: '$MONGO_LORA_USERNAME',
  pwd: '$MONGO_INITDB_ROOT_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: '$MONGO_LORA_DB_NAME'
  }]
});
db.$MONGO_LORA_DB_NAME.createIndex( { "timestamp": 1 }, { unique: true } );
db.createUser({
  user: 'admin',
  pwd: "$MONGO_INITDB_ROOT_PASSWORD",
  roles: [{
    role: 'userAdminAnyDatabase',
    db: 'admin'
  }]
});
EOF

echo "Mongo user-accounts bootstrapped."
