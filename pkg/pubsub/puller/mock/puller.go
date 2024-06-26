// Code generated by MockGen. DO NOT EDIT.
// Source: puller.go
//
// Generated by this command:
//
//	mockgen -source=puller.go -package=mock -destination=./mock/puller.go
//

// Package mock is a generated GoMock package.
package mock

import (
	context "context"
	reflect "reflect"

	gomock "go.uber.org/mock/gomock"

	puller "github.com/bucketeer-io/bucketeer/pkg/pubsub/puller"
)

// MockPuller is a mock of Puller interface.
type MockPuller struct {
	ctrl     *gomock.Controller
	recorder *MockPullerMockRecorder
}

// MockPullerMockRecorder is the mock recorder for MockPuller.
type MockPullerMockRecorder struct {
	mock *MockPuller
}

// NewMockPuller creates a new mock instance.
func NewMockPuller(ctrl *gomock.Controller) *MockPuller {
	mock := &MockPuller{ctrl: ctrl}
	mock.recorder = &MockPullerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockPuller) EXPECT() *MockPullerMockRecorder {
	return m.recorder
}

// Pull mocks base method.
func (m *MockPuller) Pull(arg0 context.Context, arg1 func(context.Context, *puller.Message)) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Pull", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// Pull indicates an expected call of Pull.
func (mr *MockPullerMockRecorder) Pull(arg0, arg1 any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Pull", reflect.TypeOf((*MockPuller)(nil).Pull), arg0, arg1)
}

// SubscriptionName mocks base method.
func (m *MockPuller) SubscriptionName() string {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SubscriptionName")
	ret0, _ := ret[0].(string)
	return ret0
}

// SubscriptionName indicates an expected call of SubscriptionName.
func (mr *MockPullerMockRecorder) SubscriptionName() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SubscriptionName", reflect.TypeOf((*MockPuller)(nil).SubscriptionName))
}
