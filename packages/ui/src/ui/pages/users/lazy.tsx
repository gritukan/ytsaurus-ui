import React from 'react';
import withLazyLoading from '../../hocs/withLazyLoading';

function importPage() {
    return import('./index');
}

export const UsersPageLazy = withLazyLoading(
    React.lazy(async () => {
        return {default: (await importPage()).UsersPage};
    }),
);