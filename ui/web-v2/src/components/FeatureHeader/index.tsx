import { SerializedError } from '@reduxjs/toolkit';
import React, { FC, memo } from 'react';
import { useIntl } from 'react-intl';
import { shallowEqual, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { register } from 'timeago.js';
import ja from 'timeago.js/lib/lang/ja';

import { PAGE_PATH_FEATURES, PAGE_PATH_ROOT } from '../../constants/routing';
import { intl } from '../../lang';
import { messages } from '../../lang/messages';
import { AppState } from '../../modules';
import { selectById as selectFeatureById } from '../../modules/features';
import { useCurrentEnvironment } from '../../modules/me';
import { Feature } from '../../proto/feature/feature_pb';
import { Breadcrumbs } from '../Breadcrumbs';
import { FeatureIdChip } from '../FeatureIdChip';
import { RelativeDateText } from '../RelativeDateText';
import { TagChips } from '../TagsChips';

register('ja', ja);

interface FeatureHeaderProps {
  featureId: string;
}

export const FeatureHeader: FC<FeatureHeaderProps> = memo(({ featureId }) => {
  const location = useLocation();
  const detailPath = location.pathname.substring(
    location.pathname.lastIndexOf('/') + 1
  );
  const { formatMessage: f } = useIntl();
  const currentEnvironment = useCurrentEnvironment();
  const [feature] = useSelector<
    AppState,
    [Feature.AsObject | undefined, SerializedError | null]
  >(
    (state) => [
      selectFeatureById(state.features, featureId),
      state.features.getFeatureError
    ],
    shallowEqual
  );

  if (!feature) {
    return <div></div>;
  }
  return (
    <div>
      <div className="mb-4">
        <Breadcrumbs
          pages={createPages(currentEnvironment.urlCode, featureId, detailPath)}
        />
      </div>
      <div className="flex">
        <div className="text-xl">{feature.name}</div>
        <div className="ml-4 text-xs flex items-center text-gray-700">
          <span className="mr-2">{f(messages.created)}</span>
          <RelativeDateText date={new Date(feature.createdAt * 1000)} />
        </div>
        <div className="flex-grow" />
        {feature.maintainer && (
          <div className="text-sm">
            {`${f(messages.maintainer)} `}
            <span className="text-gray-600">{feature.maintainer}</span>
          </div>
        )}
      </div>
      <div className="mt-2">
        <FeatureIdChip featureId={featureId} />
      </div>
      <div className="mt-2">
        <TagChips tags={feature.tagsList} />
      </div>
    </div>
  );
});

const createPages = (envUrlCode, featureId, detailPath: string) => {
  return [
    {
      name: intl.formatMessage(messages.sideMenu.featureFlags),
      path: `${PAGE_PATH_ROOT}${envUrlCode}${PAGE_PATH_FEATURES}`,
      current: false
    },
    {
      name: featureId,
      path: `${PAGE_PATH_ROOT}${envUrlCode}${PAGE_PATH_FEATURES}/${featureId}/${detailPath}`,
      current: true
    }
  ];
};
