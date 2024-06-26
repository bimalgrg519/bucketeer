import { PlusIcon } from '@heroicons/react/solid';
import { FC, memo } from 'react';
import { useIntl } from 'react-intl';

import { intl } from '../../lang';
import { messages } from '../../lang/messages';
import { useIsOwner } from '../../modules/me';
import { AccountSearchOptions } from '../../types/account';
import {
  SORT_OPTIONS_CREATED_AT_ASC,
  SORT_OPTIONS_CREATED_AT_DESC,
  SORT_OPTIONS_NAME_ASC,
  SORT_OPTIONS_NAME_DESC
} from '../../types/list';
import { classNames } from '../../utils/css';
import { FilterChip } from '../FilterChip';
import { Option } from '../FilterPopover';
import { FilterRemoveAllButtonProps } from '../FilterRemoveAllButton';
import { SearchInput } from '../SearchInput';
import { SortItem, SortSelect } from '../SortSelect';

const sortItems: SortItem[] = [
  {
    key: SORT_OPTIONS_CREATED_AT_DESC,
    message: intl.formatMessage(messages.account.sort.newest)
  },
  {
    key: SORT_OPTIONS_CREATED_AT_ASC,
    message: intl.formatMessage(messages.account.sort.oldest)
  },
  {
    key: SORT_OPTIONS_NAME_ASC,
    message: intl.formatMessage(messages.account.sort.emailAz)
  },
  {
    key: SORT_OPTIONS_NAME_DESC,
    message: intl.formatMessage(messages.account.sort.emailZa)
  }
];

export enum FilterTypes {
  ROLE = 'role',
  ENABLED = 'enabled'
}

export const filterOptions: Option[] = [
  {
    value: FilterTypes.ROLE,
    label: intl.formatMessage(messages.account.filter.role)
  },
  {
    value: FilterTypes.ENABLED,
    label: intl.formatMessage(messages.account.filter.enabled)
  }
];

export const roleOptions: Option[] = [
  {
    value: '0',
    label: intl.formatMessage(messages.account.role.viewer)
  },
  {
    value: '1',
    label: intl.formatMessage(messages.account.role.editor)
  },
  {
    value: '2',
    label: intl.formatMessage(messages.account.role.owner)
  }
];

export const enabledOptions: Option[] = [
  {
    value: 'true',
    label: intl.formatMessage(messages.enabled)
  },
  {
    value: 'false',
    label: intl.formatMessage(messages.disabled)
  }
];

export interface AccountSearchProps {
  options: AccountSearchOptions;
  onChange: (options: AccountSearchOptions) => void;
  onAdd: () => void;
}

export const AccountSearch: FC<AccountSearchProps> = memo(
  ({ options, onChange, onAdd }) => {
    const { formatMessage: f } = useIntl();
    const editable = useIsOwner();

    const handleUpdateOption = (
      optionPart: Partial<AccountSearchOptions>
    ): void => {
      onChange({ ...options, ...optionPart });
    };

    return (
      <div
        className={classNames(
          'w-full',
          'px-5 py-5 sticky top-0',
          'z-10 border-b border-gray-300'
        )}
      >
        <div className={classNames('w-full min-w-max', 'flex flex-row')}>
          <div className="flex-none w-72">
            <SearchInput
              placeholder={f(messages.account.search.placeholder)}
              value={options.q}
              onChange={(query: string) =>
                handleUpdateOption({
                  q: query
                })
              }
            />
          </div>
          {/* TODO: BEcause we switched to account api V2, the filter won't work until we create the console 3.0
          <div className="flex-none mx-2">
            <FilterPopover
              keys={filterOptions}
              values={filterValues}
              onChangeKey={handleFilterKeyChange}
              onAdd={handleFilterAdd}
            />
          </div> */}
          <div className="flex-grow" />
          <div className="flex-none -mr-2">
            <SortSelect
              sortKey={options.sort}
              sortItems={sortItems}
              onChange={(sort: string) =>
                handleUpdateOption({
                  sort: sort
                })
              }
            />
          </div>
          {editable && (
            <div className="flex-none ml-8">
              <button
                type="button"
                className="btn-submit"
                disabled={false}
                onClick={onAdd}
              >
                <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                {f(messages.button.add)}
              </button>
            </div>
          )}
        </div>
        {(options.enabled || options.role) && (
          <div className="flex space-x-2 pt-2">
            {options.role && (
              <FilterChip
                label={`${f(messages.account.filter.role)}: ${
                  roleOptions.find((option) => option.value === options.role)
                    .label
                }`}
                onRemove={() =>
                  handleUpdateOption({
                    role: null
                  })
                }
              />
            )}
            {options.enabled && (
              <FilterChip
                label={`${f(messages.account.filter.enabled)}: ${
                  enabledOptions.find(
                    (option) => option.value === options.enabled
                  ).label
                }`}
                onRemove={() =>
                  handleUpdateOption({
                    enabled: null
                  })
                }
              />
            )}
            {(options.enabled || options.role) && (
              <FilterRemoveAllButtonProps
                onClick={() =>
                  handleUpdateOption({
                    enabled: null,
                    role: null
                  })
                }
              />
            )}
          </div>
        )}
      </div>
    );
  }
);
