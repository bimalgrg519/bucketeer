# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/account/account.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from proto.environment import environment_pb2 as proto_dot_environment_dot_environment__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1bproto/account/account.proto\x12\x11\x62ucketeer.account\x1a#proto/environment/environment.proto\"\xe7\x01\n\x07\x41\x63\x63ount\x12\n\n\x02id\x18\x01 \x01(\t\x12\r\n\x05\x65mail\x18\x02 \x01(\t\x12\x0c\n\x04name\x18\x03 \x01(\t\x12-\n\x04role\x18\x04 \x01(\x0e\x32\x1f.bucketeer.account.Account.Role\x12\x10\n\x08\x64isabled\x18\x05 \x01(\x08\x12\x12\n\ncreated_at\x18\x06 \x01(\x03\x12\x12\n\nupdated_at\x18\x07 \x01(\x03\x12\x0f\n\x07\x64\x65leted\x18\x08 \x01(\x08\"9\n\x04Role\x12\n\n\x06VIEWER\x10\x00\x12\n\n\x06\x45\x44ITOR\x10\x01\x12\t\n\x05OWNER\x10\x02\x12\x0e\n\nUNASSIGNED\x10\x63\"\xaa\x01\n\x0f\x45nvironmentRole\x12\x37\n\x0b\x65nvironment\x18\x01 \x01(\x0b\x32\".bucketeer.environment.Environment\x12-\n\x04role\x18\x02 \x01(\x0e\x32\x1f.bucketeer.account.Account.Role\x12\x15\n\rtrial_project\x18\x03 \x01(\x08\x12\x18\n\x10trial_started_at\x18\x04 \x01(\x03\x42\x31Z/github.com/bucketeer-io/bucketeer/proto/accountb\x06proto3')



_ACCOUNT = DESCRIPTOR.message_types_by_name['Account']
_ENVIRONMENTROLE = DESCRIPTOR.message_types_by_name['EnvironmentRole']
_ACCOUNT_ROLE = _ACCOUNT.enum_types_by_name['Role']
Account = _reflection.GeneratedProtocolMessageType('Account', (_message.Message,), {
  'DESCRIPTOR' : _ACCOUNT,
  '__module__' : 'proto.account.account_pb2'
  # @@protoc_insertion_point(class_scope:bucketeer.account.Account)
  })
_sym_db.RegisterMessage(Account)

EnvironmentRole = _reflection.GeneratedProtocolMessageType('EnvironmentRole', (_message.Message,), {
  'DESCRIPTOR' : _ENVIRONMENTROLE,
  '__module__' : 'proto.account.account_pb2'
  # @@protoc_insertion_point(class_scope:bucketeer.account.EnvironmentRole)
  })
_sym_db.RegisterMessage(EnvironmentRole)

if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z/github.com/bucketeer-io/bucketeer/proto/account'
  _ACCOUNT._serialized_start=88
  _ACCOUNT._serialized_end=319
  _ACCOUNT_ROLE._serialized_start=262
  _ACCOUNT_ROLE._serialized_end=319
  _ENVIRONMENTROLE._serialized_start=322
  _ENVIRONMENTROLE._serialized_end=492
# @@protoc_insertion_point(module_scope)