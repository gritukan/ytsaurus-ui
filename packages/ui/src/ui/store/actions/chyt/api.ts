import axios, {CancelToken} from 'axios';
import {wrapApiPromiseByToaster} from '../../../utils/utils';
import {YTError} from '../../../../@types/types';

export type WithResult<T> = {result: T};

type CliqueAttributes =
    | 'creator'
    | 'state'
    | 'start_time'
    | 'instance_count'
    | 'total_memory'
    | 'total_cpu'
    | 'operation_id'
    | 'creation_time';

export type ChytApi =
    | {action: 'list'; params: {attributes?: Array<CliqueAttributes>}; response: ChytListResponse}
    | {action: 'start'; params: {alias: string}; response: void}
    | {action: 'stop'; params: {alias: string}; response: void}
    | {action: 'remove'; params: {alias: string}; response: void}
    | {action: 'create'; params: {alias: string}; response: void}
    | {
          action: 'set_options';
          params: {
              alias: string;
              options: {
                  instance_count?: number;
                  instance_cpu?: number;
                  instance_total_memory?: number;
                  pool: string;
              };
          };
          response: void;
      }
    | {action: 'status'; params: {alias: string}; response: WithResult<ChytStatusResponse>};

export type ChytStatusResponse = {
    yt_operation_state?: 'running';
    state?: ChytCliqueStateType;
    pool?: string;
    stage?: string;
    start_time?: string;
    finish_time?: string;
    incarnation_index?: number;
    ctl_attributes: {
        instance_count?: number;
        total_cpu?: number;
        total_memory?: number;
    };
    operation_id?: string;
    error?: YTError;
};

export type ChytListResponse = WithResult<Array<ChytListResponseItem>>;

export type ChytListResponseItem = {
    $value: string;
    $attributes?: {
        creator?: string;
        instance_count?: number;
        start_time?: string;
        state?: ChytCliqueStateType;
        total_cpu?: number;
        total_memory?: number;
        operation_id?: string;
        creation_time?: string;
    };
};

export type ChytCliqueStateType = 'active' | 'broken' | 'inactive';

export function chytApiAction<
    T extends ChytApi['action'] = never,
    ApiItem extends ChytApi & {action: T} = ChytApi & {action: T},
>(
    action: T,
    cluster: string,
    params: ApiItem['params'],
    {cancelToken, skipErrorToast}: {cancelToken?: CancelToken; skipErrorToast?: boolean} = {},
) {
    const extras = action === 'start' ? {untracked: true} : undefined;

    return wrapApiPromiseByToaster(
        axios.request<ApiItem['response']>({
            method: 'POST',
            url: `/api/chyt/${cluster}/${action}`,
            data: {
                params: {...params, ...extras},
            },
            cancelToken,
        }),
        {
            toasterName: `clique-${action}`,
            skipSuccessToast: true,
            skipErrorToast,
            errorTitle: `Failed to ${action} clique`,
        },
    ).then((response) => {
        return response.data;
    });
}
