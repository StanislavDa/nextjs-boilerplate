import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { APP_ROUTES, PageLayout, router } from '@example/shared';
import { useRequestWithTariffQuery } from '@example/data';
import {
  DraftRequestForm,
  createEditRequestDraftStore,
} from '@example/modules/RequestModule';

import { EditDraftContentState } from './ContentState';

type Props = {
  requestID: string;
};

export const EditDraftRequestScreen = observer(({ requestID }: Props) => {
  const [{ editRequest, retryEditRequest, editRequestState }] = useState(() =>
    createEditRequestDraftStore(requestID, {
      onSuccessEditRequest: () => {
        setTimeout(() => {
          router.push(APP_ROUTES.createDraftRequest.getRedirectPath());
        }, 3000);
      },
    }),
  );

  const { data: requestInitialValues } = useRequestWithTariffQuery(requestID);

  return (
    <PageLayout
      header={{ title: 'Редактирование заявления' }}
      content={{
        children: (
          <EditDraftContentState
            {...editRequestState}
            isError={Boolean(editRequestState.errorMessage)}
            onRetryEdit={retryEditRequest}
          >
            <DraftRequestForm
              initialValues={requestInitialValues}
              onSubmit={editRequest}
            />
          </EditDraftContentState>
        ),
      }}
    />
  );
});
