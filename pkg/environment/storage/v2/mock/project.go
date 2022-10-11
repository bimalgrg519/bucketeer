// Code generated by MockGen. DO NOT EDIT.
// Source: project.go

// Package mock is a generated GoMock package.
package mock

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"

	domain "github.com/bucketeer-io/bucketeer/pkg/environment/domain"
	mysql "github.com/bucketeer-io/bucketeer/pkg/storage/v2/mysql"
	environment "github.com/bucketeer-io/bucketeer/proto/environment"
)

// MockProjectStorage is a mock of ProjectStorage interface.
type MockProjectStorage struct {
	ctrl     *gomock.Controller
	recorder *MockProjectStorageMockRecorder
}

// MockProjectStorageMockRecorder is the mock recorder for MockProjectStorage.
type MockProjectStorageMockRecorder struct {
	mock *MockProjectStorage
}

// NewMockProjectStorage creates a new mock instance.
func NewMockProjectStorage(ctrl *gomock.Controller) *MockProjectStorage {
	mock := &MockProjectStorage{ctrl: ctrl}
	mock.recorder = &MockProjectStorageMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockProjectStorage) EXPECT() *MockProjectStorageMockRecorder {
	return m.recorder
}

// CreateProject mocks base method.
func (m *MockProjectStorage) CreateProject(ctx context.Context, p *domain.Project) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateProject", ctx, p)
	ret0, _ := ret[0].(error)
	return ret0
}

// CreateProject indicates an expected call of CreateProject.
func (mr *MockProjectStorageMockRecorder) CreateProject(ctx, p interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateProject", reflect.TypeOf((*MockProjectStorage)(nil).CreateProject), ctx, p)
}

// GetProject mocks base method.
func (m *MockProjectStorage) GetProject(ctx context.Context, id string) (*domain.Project, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetProject", ctx, id)
	ret0, _ := ret[0].(*domain.Project)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetProject indicates an expected call of GetProject.
func (mr *MockProjectStorageMockRecorder) GetProject(ctx, id interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetProject", reflect.TypeOf((*MockProjectStorage)(nil).GetProject), ctx, id)
}

// GetTrialProjectByEmail mocks base method.
func (m *MockProjectStorage) GetTrialProjectByEmail(ctx context.Context, email string, disabled, trial bool) (*domain.Project, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetTrialProjectByEmail", ctx, email, disabled, trial)
	ret0, _ := ret[0].(*domain.Project)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetTrialProjectByEmail indicates an expected call of GetTrialProjectByEmail.
func (mr *MockProjectStorageMockRecorder) GetTrialProjectByEmail(ctx, email, disabled, trial interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetTrialProjectByEmail", reflect.TypeOf((*MockProjectStorage)(nil).GetTrialProjectByEmail), ctx, email, disabled, trial)
}

// ListProjects mocks base method.
func (m *MockProjectStorage) ListProjects(ctx context.Context, whereParts []mysql.WherePart, orders []*mysql.Order, limit, offset int) ([]*environment.Project, int, int64, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListProjects", ctx, whereParts, orders, limit, offset)
	ret0, _ := ret[0].([]*environment.Project)
	ret1, _ := ret[1].(int)
	ret2, _ := ret[2].(int64)
	ret3, _ := ret[3].(error)
	return ret0, ret1, ret2, ret3
}

// ListProjects indicates an expected call of ListProjects.
func (mr *MockProjectStorageMockRecorder) ListProjects(ctx, whereParts, orders, limit, offset interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListProjects", reflect.TypeOf((*MockProjectStorage)(nil).ListProjects), ctx, whereParts, orders, limit, offset)
}

// UpdateProject mocks base method.
func (m *MockProjectStorage) UpdateProject(ctx context.Context, p *domain.Project) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateProject", ctx, p)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateProject indicates an expected call of UpdateProject.
func (mr *MockProjectStorageMockRecorder) UpdateProject(ctx, p interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateProject", reflect.TypeOf((*MockProjectStorage)(nil).UpdateProject), ctx, p)
}