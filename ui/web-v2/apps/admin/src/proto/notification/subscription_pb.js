// source: proto/notification/subscription.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var proto_notification_recipient_pb = require('../../proto/notification/recipient_pb.js');
goog.object.extend(proto, proto_notification_recipient_pb);
goog.exportSymbol('proto.bucketeer.notification.Subscription', null, global);
goog.exportSymbol('proto.bucketeer.notification.Subscription.SourceType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.notification.Subscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bucketeer.notification.Subscription.repeatedFields_, null);
};
goog.inherits(proto.bucketeer.notification.Subscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.notification.Subscription.displayName = 'proto.bucketeer.notification.Subscription';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bucketeer.notification.Subscription.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bucketeer.notification.Subscription.prototype.toObject = function(opt_includeInstance) {
  return proto.bucketeer.notification.Subscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bucketeer.notification.Subscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.notification.Subscription.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    sourceTypesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    recipient: (f = msg.getRecipient()) && proto_notification_recipient_pb.Recipient.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.notification.Subscription}
 */
proto.bucketeer.notification.Subscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.notification.Subscription;
  return proto.bucketeer.notification.Subscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.notification.Subscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.notification.Subscription}
 */
proto.bucketeer.notification.Subscription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    case 5:
      var values = /** @type {!Array<!proto.bucketeer.notification.Subscription.SourceType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSourceTypes(values[i]);
      }
      break;
    case 6:
      var value = new proto_notification_recipient_pb.Recipient;
      reader.readMessage(value,proto_notification_recipient_pb.Recipient.deserializeBinaryFromReader);
      msg.setRecipient(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.notification.Subscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.notification.Subscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.notification.Subscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.notification.Subscription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getSourceTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
  f = message.getRecipient();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_notification_recipient_pb.Recipient.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bucketeer.notification.Subscription.SourceType = {
  DOMAIN_EVENT_FEATURE: 0,
  DOMAIN_EVENT_GOAL: 1,
  DOMAIN_EVENT_EXPERIMENT: 2,
  DOMAIN_EVENT_ACCOUNT: 3,
  DOMAIN_EVENT_APIKEY: 4,
  DOMAIN_EVENT_SEGMENT: 5,
  DOMAIN_EVENT_ENVIRONMENT: 6,
  DOMAIN_EVENT_ADMIN_ACCOUNT: 7,
  DOMAIN_EVENT_AUTOOPS_RULE: 8,
  DOMAIN_EVENT_PUSH: 9,
  DOMAIN_EVENT_SUBSCRIPTION: 10,
  DOMAIN_EVENT_ADMIN_SUBSCRIPTION: 11,
  DOMAIN_EVENT_PROJECT: 12,
  DOMAIN_EVENT_WEBHOOK: 13,
  DOMAIN_EVENT_PROGRESSIVE_ROLLOUT: 14,
  DOMAIN_EVENT_ORGANIZATION: 15,
  DOMAIN_EVENT_FLAG_TRIGGER: 16,
  FEATURE_STALE: 100,
  EXPERIMENT_RUNNING: 200,
  MAU_COUNT: 300
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.bucketeer.notification.Subscription.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.notification.Subscription} returns this
 */
proto.bucketeer.notification.Subscription.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 created_at = 2;
 * @return {number}
 */
proto.bucketeer.notification.Subscription.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bucketeer.notification.Subscription} returns this
 */
proto.bucketeer.notification.Subscription.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 updated_at = 3;
 * @return {number}
 */
proto.bucketeer.notification.Subscription.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bucketeer.notification.Subscription} returns this
 */
proto.bucketeer.notification.Subscription.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool disabled = 4;
 * @return {boolean}
 */
proto.bucketeer.notification.Subscription.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bucketeer.notification.Subscription} returns this
 */
proto.bucketeer.notification.Subscription.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated SourceType source_types = 5;
 * @return {!Array<!proto.bucketeer.notification.Subscription.SourceType>}
 */
proto.bucketeer.notification.Subscription.prototype.getSourceTypesList = function() {
  return /** @type {!Array<!proto.bucketeer.notification.Subscription.SourceType>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<!proto.bucketeer.notification.Subscription.SourceType>} value
 * @return {!proto.bucketeer.notification.Subscription} returns this
 */
proto.bucketeer.notification.Subscription.prototype.setSourceTypesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.bucketeer.notification.Subscription.SourceType} value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.notification.Subscription} returns this
 */
proto.bucketeer.notification.Subscription.prototype.addSourceTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.notification.Subscription} returns this
 */
proto.bucketeer.notification.Subscription.prototype.clearSourceTypesList = function() {
  return this.setSourceTypesList([]);
};


/**
 * optional Recipient recipient = 6;
 * @return {?proto.bucketeer.notification.Recipient}
 */
proto.bucketeer.notification.Subscription.prototype.getRecipient = function() {
  return /** @type{?proto.bucketeer.notification.Recipient} */ (
    jspb.Message.getWrapperField(this, proto_notification_recipient_pb.Recipient, 6));
};


/**
 * @param {?proto.bucketeer.notification.Recipient|undefined} value
 * @return {!proto.bucketeer.notification.Subscription} returns this
*/
proto.bucketeer.notification.Subscription.prototype.setRecipient = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.notification.Subscription} returns this
 */
proto.bucketeer.notification.Subscription.prototype.clearRecipient = function() {
  return this.setRecipient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.notification.Subscription.prototype.hasRecipient = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string name = 7;
 * @return {string}
 */
proto.bucketeer.notification.Subscription.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bucketeer.notification.Subscription} returns this
 */
proto.bucketeer.notification.Subscription.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


goog.object.extend(exports, proto.bucketeer.notification);
