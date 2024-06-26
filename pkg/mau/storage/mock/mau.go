// Code generated by MockGen. DO NOT EDIT.
// Source: mau.go
//
// Generated by this command:
//
//	mockgen -source=mau.go -package=mock -destination=./mock/mau.go
//

// Package mock is a generated GoMock package.
package mock

import (
	context "context"
	reflect "reflect"

	gomock "go.uber.org/mock/gomock"
)

// MockMAUStorage is a mock of MAUStorage interface.
type MockMAUStorage struct {
	ctrl     *gomock.Controller
	recorder *MockMAUStorageMockRecorder
}

// MockMAUStorageMockRecorder is the mock recorder for MockMAUStorage.
type MockMAUStorageMockRecorder struct {
	mock *MockMAUStorage
}

// NewMockMAUStorage creates a new mock instance.
func NewMockMAUStorage(ctrl *gomock.Controller) *MockMAUStorage {
	mock := &MockMAUStorage{ctrl: ctrl}
	mock.recorder = &MockMAUStorageMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockMAUStorage) EXPECT() *MockMAUStorageMockRecorder {
	return m.recorder
}

// CreatePartition mocks base method.
func (m *MockMAUStorage) CreatePartition(ctx context.Context, partition, lessThan string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreatePartition", ctx, partition, lessThan)
	ret0, _ := ret[0].(error)
	return ret0
}

// CreatePartition indicates an expected call of CreatePartition.
func (mr *MockMAUStorageMockRecorder) CreatePartition(ctx, partition, lessThan any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreatePartition", reflect.TypeOf((*MockMAUStorage)(nil).CreatePartition), ctx, partition, lessThan)
}

// DeleteRecords mocks base method.
func (m *MockMAUStorage) DeleteRecords(ctx context.Context, partition string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteRecords", ctx, partition)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteRecords indicates an expected call of DeleteRecords.
func (mr *MockMAUStorageMockRecorder) DeleteRecords(ctx, partition any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteRecords", reflect.TypeOf((*MockMAUStorage)(nil).DeleteRecords), ctx, partition)
}

// DropPartition mocks base method.
func (m *MockMAUStorage) DropPartition(ctx context.Context, partition string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DropPartition", ctx, partition)
	ret0, _ := ret[0].(error)
	return ret0
}

// DropPartition indicates an expected call of DropPartition.
func (mr *MockMAUStorageMockRecorder) DropPartition(ctx, partition any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DropPartition", reflect.TypeOf((*MockMAUStorage)(nil).DropPartition), ctx, partition)
}

// RebuildPartition mocks base method.
func (m *MockMAUStorage) RebuildPartition(ctx context.Context, partition string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "RebuildPartition", ctx, partition)
	ret0, _ := ret[0].(error)
	return ret0
}

// RebuildPartition indicates an expected call of RebuildPartition.
func (mr *MockMAUStorageMockRecorder) RebuildPartition(ctx, partition any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RebuildPartition", reflect.TypeOf((*MockMAUStorage)(nil).RebuildPartition), ctx, partition)
}
