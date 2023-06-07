// Copyright 2022 The Bucketeer Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.18.1
// source: proto/eventcounter/variation_count.proto

package eventcounter

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type VariationCount struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	VariationId             string  `protobuf:"bytes,1,opt,name=variation_id,json=variationId,proto3" json:"variation_id,omitempty"`
	UserCount               int64   `protobuf:"varint,2,opt,name=user_count,json=userCount,proto3" json:"user_count,omitempty"`
	EventCount              int64   `protobuf:"varint,3,opt,name=event_count,json=eventCount,proto3" json:"event_count,omitempty"`
	ValueSum                float64 `protobuf:"fixed64,4,opt,name=value_sum,json=valueSum,proto3" json:"value_sum,omitempty"`
	CreatedAt               int64   `protobuf:"varint,5,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	VariationValue          string  `protobuf:"bytes,6,opt,name=variation_value,json=variationValue,proto3" json:"variation_value,omitempty"`
	ValueSumPerUserMean     float64 `protobuf:"fixed64,7,opt,name=value_sum_per_user_mean,json=valueSumPerUserMean,proto3" json:"value_sum_per_user_mean,omitempty"`
	ValueSumPerUserVariance float64 `protobuf:"fixed64,8,opt,name=value_sum_per_user_variance,json=valueSumPerUserVariance,proto3" json:"value_sum_per_user_variance,omitempty"`
}

func (x *VariationCount) Reset() {
	*x = VariationCount{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_eventcounter_variation_count_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VariationCount) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VariationCount) ProtoMessage() {}

func (x *VariationCount) ProtoReflect() protoreflect.Message {
	mi := &file_proto_eventcounter_variation_count_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VariationCount.ProtoReflect.Descriptor instead.
func (*VariationCount) Descriptor() ([]byte, []int) {
	return file_proto_eventcounter_variation_count_proto_rawDescGZIP(), []int{0}
}

func (x *VariationCount) GetVariationId() string {
	if x != nil {
		return x.VariationId
	}
	return ""
}

func (x *VariationCount) GetUserCount() int64 {
	if x != nil {
		return x.UserCount
	}
	return 0
}

func (x *VariationCount) GetEventCount() int64 {
	if x != nil {
		return x.EventCount
	}
	return 0
}

func (x *VariationCount) GetValueSum() float64 {
	if x != nil {
		return x.ValueSum
	}
	return 0
}

func (x *VariationCount) GetCreatedAt() int64 {
	if x != nil {
		return x.CreatedAt
	}
	return 0
}

func (x *VariationCount) GetVariationValue() string {
	if x != nil {
		return x.VariationValue
	}
	return ""
}

func (x *VariationCount) GetValueSumPerUserMean() float64 {
	if x != nil {
		return x.ValueSumPerUserMean
	}
	return 0
}

func (x *VariationCount) GetValueSumPerUserVariance() float64 {
	if x != nil {
		return x.ValueSumPerUserVariance
	}
	return 0
}

var File_proto_eventcounter_variation_count_proto protoreflect.FileDescriptor

var file_proto_eventcounter_variation_count_proto_rawDesc = []byte{
	0x0a, 0x28, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x65, 0x72, 0x2f, 0x76, 0x61, 0x72, 0x69, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x16, 0x62, 0x75, 0x63, 0x6b,
	0x65, 0x74, 0x65, 0x65, 0x72, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x65, 0x72, 0x22, 0xcc, 0x02, 0x0a, 0x0e, 0x56, 0x61, 0x72, 0x69, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x21, 0x0a, 0x0c, 0x76, 0x61, 0x72, 0x69, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x76, 0x61, 0x72,
	0x69, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x73, 0x65, 0x72,
	0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x75, 0x73,
	0x65, 0x72, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x1f, 0x0a, 0x0b, 0x65, 0x76, 0x65, 0x6e, 0x74,
	0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x65, 0x76,
	0x65, 0x6e, 0x74, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x5f, 0x73, 0x75, 0x6d, 0x18, 0x04, 0x20, 0x01, 0x28, 0x01, 0x52, 0x08, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x53, 0x75, 0x6d, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64,
	0x5f, 0x61, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x41, 0x74, 0x12, 0x27, 0x0a, 0x0f, 0x76, 0x61, 0x72, 0x69, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x76,
	0x61, 0x72, 0x69, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x34, 0x0a,
	0x17, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x5f, 0x73, 0x75, 0x6d, 0x5f, 0x70, 0x65, 0x72, 0x5f, 0x75,
	0x73, 0x65, 0x72, 0x5f, 0x6d, 0x65, 0x61, 0x6e, 0x18, 0x07, 0x20, 0x01, 0x28, 0x01, 0x52, 0x13,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x53, 0x75, 0x6d, 0x50, 0x65, 0x72, 0x55, 0x73, 0x65, 0x72, 0x4d,
	0x65, 0x61, 0x6e, 0x12, 0x3c, 0x0a, 0x1b, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x5f, 0x73, 0x75, 0x6d,
	0x5f, 0x70, 0x65, 0x72, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x76, 0x61, 0x72, 0x69, 0x61, 0x6e,
	0x63, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x01, 0x52, 0x17, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x53,
	0x75, 0x6d, 0x50, 0x65, 0x72, 0x55, 0x73, 0x65, 0x72, 0x56, 0x61, 0x72, 0x69, 0x61, 0x6e, 0x63,
	0x65, 0x42, 0x36, 0x5a, 0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2d, 0x69, 0x6f, 0x2f, 0x62, 0x75, 0x63,
	0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x65, 0x76, 0x65,
	0x6e, 0x74, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x65, 0x72, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_proto_eventcounter_variation_count_proto_rawDescOnce sync.Once
	file_proto_eventcounter_variation_count_proto_rawDescData = file_proto_eventcounter_variation_count_proto_rawDesc
)

func file_proto_eventcounter_variation_count_proto_rawDescGZIP() []byte {
	file_proto_eventcounter_variation_count_proto_rawDescOnce.Do(func() {
		file_proto_eventcounter_variation_count_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_eventcounter_variation_count_proto_rawDescData)
	})
	return file_proto_eventcounter_variation_count_proto_rawDescData
}

var file_proto_eventcounter_variation_count_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_proto_eventcounter_variation_count_proto_goTypes = []interface{}{
	(*VariationCount)(nil), // 0: bucketeer.eventcounter.VariationCount
}
var file_proto_eventcounter_variation_count_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_proto_eventcounter_variation_count_proto_init() }
func file_proto_eventcounter_variation_count_proto_init() {
	if File_proto_eventcounter_variation_count_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_eventcounter_variation_count_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VariationCount); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_eventcounter_variation_count_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_proto_eventcounter_variation_count_proto_goTypes,
		DependencyIndexes: file_proto_eventcounter_variation_count_proto_depIdxs,
		MessageInfos:      file_proto_eventcounter_variation_count_proto_msgTypes,
	}.Build()
	File_proto_eventcounter_variation_count_proto = out.File
	file_proto_eventcounter_variation_count_proto_rawDesc = nil
	file_proto_eventcounter_variation_count_proto_goTypes = nil
	file_proto_eventcounter_variation_count_proto_depIdxs = nil
}