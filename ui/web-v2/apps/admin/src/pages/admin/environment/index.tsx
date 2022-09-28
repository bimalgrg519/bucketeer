import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch, useParams } from 'react-router-dom';

import { EnvironmentAddForm } from '../../../components/EnvironmentAddForm';
import { EnvironmentList } from '../../../components/EnvironmentList';
import { EnvironmentUpdateForm } from '../../../components/EnvironmentUpdateForm';
import { Overlay } from '../../../components/Overlay';
import { ENVIRONMENT_LIST_PAGE_SIZE } from '../../../constants/environment';
import {
  ID_NEW,
  PAGE_PATH_ADMIN,
  PAGE_PATH_ENVIRONMENTS,
  PAGE_PATH_NEW,
} from '../../../constants/routing';
import { messages } from '../../../lang/messages';
import {
  createEnvironment,
  getEnvironment,
  listEnvironments,
  OrderBy,
  OrderDirection,
  updateEnvironment,
} from '../../../modules/environments';
import { Environment } from '../../../proto/environment/environment_pb';
import { ListProjectsRequest } from '../../../proto/environment/service_pb';
import { AppDispatch } from '../../../store';
import {
  EnvironmentSortOption,
  isEnvironmentSortOption,
} from '../../../types/environment';
import {
  SORT_OPTIONS_CREATED_AT_ASC,
  SORT_OPTIONS_CREATED_AT_DESC,
  SORT_OPTIONS_ID_DESC,
  SORT_OPTIONS_ID_ASC,
} from '../../../types/list';
import {
  useSearchParams,
  stringifySearchParams,
} from '../../../utils/search-params';

import { addFormSchema } from './formSchema';

interface Sort {
  orderBy: OrderBy;
  orderDirection: OrderDirection;
}

const createSort = (sortOption?: EnvironmentSortOption): Sort => {
  switch (sortOption) {
    case SORT_OPTIONS_CREATED_AT_ASC:
      return {
        orderBy: ListProjectsRequest.OrderBy.CREATED_AT,
        orderDirection: ListProjectsRequest.OrderDirection.ASC,
      };
    case SORT_OPTIONS_CREATED_AT_DESC:
      return {
        orderBy: ListProjectsRequest.OrderBy.CREATED_AT,
        orderDirection: ListProjectsRequest.OrderDirection.DESC,
      };
    case SORT_OPTIONS_ID_ASC:
      return {
        orderBy: ListProjectsRequest.OrderBy.ID,
        orderDirection: ListProjectsRequest.OrderDirection.ASC,
      };
    case SORT_OPTIONS_ID_DESC:
      return {
        orderBy: ListProjectsRequest.OrderBy.ID,
        orderDirection: ListProjectsRequest.OrderDirection.DESC,
      };
    default:
      return {
        orderBy: ListProjectsRequest.OrderBy.CREATED_AT,
        orderDirection: ListProjectsRequest.OrderDirection.DESC,
      };
  }
};

export const AdminEnvironmentIndexPage: FC = memo(() => {
  const dispatch = useDispatch<AppDispatch>();
  const { formatMessage: f } = useIntl();
  const searchOptions = useSearchParams();
  searchOptions.sort = searchOptions.sort ? searchOptions.sort : '-createdAt';
  const history = useHistory();
  const { url } = useRouteMatch();
  const { environmentId } = useParams<{ environmentId: string }>();
  const isNew = environmentId == ID_NEW;
  const isUpdate = environmentId ? environmentId != ID_NEW : false;
  const [open, setOpen] = useState(isNew);
  const updateProjectList = useCallback(
    (options, page: number) => {
      const sort = createSort(
        isEnvironmentSortOption(options && options.sort)
          ? options.sort
          : '-createdAt'
      );
      const cursor = (page - 1) * ENVIRONMENT_LIST_PAGE_SIZE;
      dispatch(
        listEnvironments({
          pageSize: ENVIRONMENT_LIST_PAGE_SIZE,
          cursor: String(cursor),
          orderBy: sort.orderBy,
          orderDirection: sort.orderDirection,
          searchKeyword: options && (options.q as string),
          projectId: options && (options.projectId as string),
        })
      );
    },
    [dispatch]
  );

  const updateURL = useCallback(
    (options: Record<string, string | number | boolean | undefined>) => {
      history.replace(
        `${url}?${stringifySearchParams({
          ...options,
        })}`
      );
    },
    [history]
  );

  const handleSearchOptionsChange = useCallback(
    (options) => {
      updateURL({ ...options, page: 1 });
      updateProjectList(options, 1);
    },
    [updateURL, updateProjectList]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      updateURL({ ...searchOptions, page });
      updateProjectList(searchOptions, page);
    },
    [updateURL, searchOptions, updateProjectList]
  );

  const handleOpenAdd = useCallback(() => {
    setOpen(true);
    history.push({
      pathname: `${PAGE_PATH_ADMIN}${PAGE_PATH_ENVIRONMENTS}${PAGE_PATH_NEW}`,
      search: location.search,
    });
  }, [setOpen, history, location]);

  const addMethod = useForm({
    resolver: yupResolver(addFormSchema),
    defaultValues: {
      id: '',
      projectId: '',
      description: '',
    },
    mode: 'onChange',
  });
  const { handleSubmit: handleAddSubmit, reset: resetAdd } = addMethod;

  const handleOpenUpdate = useCallback(
    (e: Environment.AsObject) => {
      setOpen(true);
      resetUpdate({
        id: e.id,
        projectId: e.projectId,
        description: e.description,
      });
      history.push({
        pathname: `${PAGE_PATH_ADMIN}${PAGE_PATH_ENVIRONMENTS}/${e.id}`,
        search: location.search,
      });
    },
    [setOpen, history, location]
  );

  const updateMethod = useForm({
    mode: 'onChange',
  });
  const { handleSubmit: handleUpdateSubmit, reset: resetUpdate } = updateMethod;

  const handleClose = useCallback(() => {
    resetAdd();
    resetUpdate();
    setOpen(false);
    history.replace({
      pathname: `${PAGE_PATH_ADMIN}${PAGE_PATH_ENVIRONMENTS}`,
      search: location.search,
    });
  }, [setOpen, history, location, resetAdd]);

  const handleAdd = useCallback(
    async (data) => {
      dispatch(
        createEnvironment({
          id: data.id,
          projectId: data.projectId,
          description: data.description,
        })
      ).then(() => {
        resetAdd();
        setOpen(false);
        history.replace(`${PAGE_PATH_ADMIN}${PAGE_PATH_ENVIRONMENTS}`);
        updateProjectList(null, 1);
      });
    },
    [dispatch]
  );

  const handleUpdate = useCallback(
    async (data) => {
      dispatch(
        updateEnvironment({
          id: environmentId,
          description: data.description,
        })
      ).then(() => {
        dispatch(
          getEnvironment({
            id: environmentId,
          })
        );
        handleClose();
      });
    },
    [dispatch, environmentId]
  );

  useEffect(() => {
    history.listen(() => {
      // Handle browser's back button
      if (history.action === 'POP') {
        if (open) {
          setOpen(false);
        }
      }
    });
  });

  useEffect(() => {
    updateProjectList(
      searchOptions,
      searchOptions.page ? Number(searchOptions.page) : 1
    );
  }, [dispatch, updateProjectList]);

  return (
    <>
      <div className="flex items-stretch m-10 text-sm">
        <p className="text-gray-700">
          {f(messages.adminEnvironment.list.header.description)}
        </p>
        <a
          className="link"
          target="_blank"
          href="https://bucketeer.io/docs/#/environments"
          rel="noreferrer"
        >
          {f(messages.readMore)}
        </a>
      </div>
      <div className="m-10">
        <EnvironmentList
          searchOptions={searchOptions}
          onChangePage={handlePageChange}
          onChangeSearchOptions={handleSearchOptionsChange}
          onAdd={handleOpenAdd}
          onUpdate={handleOpenUpdate}
        />
      </div>
      <Overlay open={open} onClose={handleClose}>
        {isNew && (
          <FormProvider {...addMethod}>
            <EnvironmentAddForm
              onSubmit={handleAddSubmit(handleAdd)}
              onCancel={handleClose}
            />
          </FormProvider>
        )}
        {isUpdate && (
          <FormProvider {...updateMethod}>
            <EnvironmentUpdateForm
              onSubmit={handleUpdateSubmit(handleUpdate)}
              onCancel={handleClose}
            />
          </FormProvider>
        )}
      </Overlay>
    </>
  );
});
