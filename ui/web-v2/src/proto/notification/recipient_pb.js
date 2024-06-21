// source: proto/notification/recipient.proto
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
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof window !== 'undefined' && window) ||
  (typeof global !== 'undefined' && global) ||
  (typeof self !== 'undefined' && self) ||
  function () {
    return this;
  }.call(null) ||
  Function('return this')();

goog.exportSymbol('proto.bucketeer.notification.Recipient', null, global);
goog.exportSymbol(
  'proto.bucketeer.notification.Recipient.Language',
  null,
  global
);
goog.exportSymbol('proto.bucketeer.notification.Recipient.Type', null, global);
goog.exportSymbol(
  'proto.bucketeer.notification.SlackChannelRecipient',
  null,
  global
);
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
proto.bucketeer.notification.Recipient = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.notification.Recipient, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.notification.Recipient.displayName =
    'proto.bucketeer.notification.Recipient';
}
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
proto.bucketeer.notification.SlackChannelRecipient = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.notification.SlackChannelRecipient, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.notification.SlackChannelRecipient.displayName =
    'proto.bucketeer.notification.SlackChannelRecipient';
}

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
  proto.bucketeer.notification.Recipient.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.bucketeer.notification.Recipient.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.notification.Recipient} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.notification.Recipient.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        type: jspb.Message.getFieldWithDefault(msg, 1, 0),
        slackChannelRecipient:
          (f = msg.getSlackChannelRecipient()) &&
          proto.bucketeer.notification.SlackChannelRecipient.toObject(
            includeInstance,
            f
          ),
        language: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.bucketeer.notification.Recipient}
 */
proto.bucketeer.notification.Recipient.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.notification.Recipient();
  return proto.bucketeer.notification.Recipient.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.notification.Recipient} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.notification.Recipient}
 */
proto.bucketeer.notification.Recipient.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value =
          /** @type {!proto.bucketeer.notification.Recipient.Type} */ (
            reader.readEnum()
          );
        msg.setType(value);
        break;
      case 2:
        var value = new proto.bucketeer.notification.SlackChannelRecipient();
        reader.readMessage(
          value,
          proto.bucketeer.notification.SlackChannelRecipient
            .deserializeBinaryFromReader
        );
        msg.setSlackChannelRecipient(value);
        break;
      case 3:
        var value =
          /** @type {!proto.bucketeer.notification.Recipient.Language} */ (
            reader.readEnum()
          );
        msg.setLanguage(value);
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
proto.bucketeer.notification.Recipient.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.notification.Recipient.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.notification.Recipient} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.notification.Recipient.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getSlackChannelRecipient();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bucketeer.notification.SlackChannelRecipient.serializeBinaryToWriter
    );
  }
  f = message.getLanguage();
  if (f !== 0.0) {
    writer.writeEnum(3, f);
  }
};

/**
 * @enum {number}
 */
proto.bucketeer.notification.Recipient.Type = {
  SLACKCHANNEL: 0
};

/**
 * @enum {number}
 */
proto.bucketeer.notification.Recipient.Language = {
  ENGLISH: 0,
  JAPANESE: 1
};

/**
 * optional Type type = 1;
 * @return {!proto.bucketeer.notification.Recipient.Type}
 */
proto.bucketeer.notification.Recipient.prototype.getType = function () {
  return /** @type {!proto.bucketeer.notification.Recipient.Type} */ (
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};

/**
 * @param {!proto.bucketeer.notification.Recipient.Type} value
 * @return {!proto.bucketeer.notification.Recipient} returns this
 */
proto.bucketeer.notification.Recipient.prototype.setType = function (value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional SlackChannelRecipient slack_channel_recipient = 2;
 * @return {?proto.bucketeer.notification.SlackChannelRecipient}
 */
proto.bucketeer.notification.Recipient.prototype.getSlackChannelRecipient =
  function () {
    return /** @type{?proto.bucketeer.notification.SlackChannelRecipient} */ (
      jspb.Message.getWrapperField(
        this,
        proto.bucketeer.notification.SlackChannelRecipient,
        2
      )
    );
  };

/**
 * @param {?proto.bucketeer.notification.SlackChannelRecipient|undefined} value
 * @return {!proto.bucketeer.notification.Recipient} returns this
 */
proto.bucketeer.notification.Recipient.prototype.setSlackChannelRecipient =
  function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.notification.Recipient} returns this
 */
proto.bucketeer.notification.Recipient.prototype.clearSlackChannelRecipient =
  function () {
    return this.setSlackChannelRecipient(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.notification.Recipient.prototype.hasSlackChannelRecipient =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

/**
 * optional Language language = 3;
 * @return {!proto.bucketeer.notification.Recipient.Language}
 */
proto.bucketeer.notification.Recipient.prototype.getLanguage = function () {
  return /** @type {!proto.bucketeer.notification.Recipient.Language} */ (
    jspb.Message.getFieldWithDefault(this, 3, 0)
  );
};

/**
 * @param {!proto.bucketeer.notification.Recipient.Language} value
 * @return {!proto.bucketeer.notification.Recipient} returns this
 */
proto.bucketeer.notification.Recipient.prototype.setLanguage = function (
  value
) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};

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
  proto.bucketeer.notification.SlackChannelRecipient.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.notification.SlackChannelRecipient.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.notification.SlackChannelRecipient} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.notification.SlackChannelRecipient.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        webhookUrl: jspb.Message.getFieldWithDefault(msg, 1, '')
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
 * @return {!proto.bucketeer.notification.SlackChannelRecipient}
 */
proto.bucketeer.notification.SlackChannelRecipient.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bucketeer.notification.SlackChannelRecipient();
    return proto.bucketeer.notification.SlackChannelRecipient.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.notification.SlackChannelRecipient} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.notification.SlackChannelRecipient}
 */
proto.bucketeer.notification.SlackChannelRecipient.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setWebhookUrl(value);
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
proto.bucketeer.notification.SlackChannelRecipient.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.notification.SlackChannelRecipient.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.notification.SlackChannelRecipient} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.notification.SlackChannelRecipient.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getWebhookUrl();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  };

/**
 * optional string webhook_url = 1;
 * @return {string}
 */
proto.bucketeer.notification.SlackChannelRecipient.prototype.getWebhookUrl =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.notification.SlackChannelRecipient} returns this
 */
proto.bucketeer.notification.SlackChannelRecipient.prototype.setWebhookUrl =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

goog.object.extend(exports, proto.bucketeer.notification);