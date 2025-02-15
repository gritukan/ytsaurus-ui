import React from 'react';
import {useSelector} from 'react-redux';
import {Route, RouteComponentProps, Switch, useHistory} from 'react-router';
import cn from 'bem-cn-lite';
import {Breadcrumbs, BreadcrumbsItem} from '../../../components/Breadcrumbs';
import {Tab as ComponentsTab} from '../../../constants/components/main';
import {Page} from '../../../constants/index';
import {RowWithName} from '../../../containers/AppNavigation/TopRowContent/SectionName';
import {nodeHostSelector} from '../../../store/selectors/components/node/node';
import {getCluster} from '../../../store/selectors/global';
import {makeComponentsNodesUrl} from '../../../utils/app-url';

import './ComponentsTopRowContent.scss';

const block = cn('components-top-row-content');

function ComponentsTopRowContent({match}: RouteComponentProps) {
    return (
        <Switch>
            <Route
                path={`${match.path}/${ComponentsTab.NODES}/:host`}
                component={ComponentsNodeTopRowContent}
            />
            <Route path={''} render={() => <RowWithName page={Page.COMPONENTS} />} />
        </Switch>
    );
}

function ComponentsNodeTopRowContent() {
    return (
        <RowWithName page={Page.COMPONENTS}>
            <ComponentsBreadcrumbs />
        </RowWithName>
    );
}

function ComponentsBreadcrumbs() {
    const cluster = useSelector(getCluster);
    const nodeHost = useSelector(nodeHostSelector);
    const history = useHistory();

    const items = React.useMemo(() => {
        const result = [
            <BreadcrumbsItem key="<Root>" href={makeComponentsNodesUrl({cluster})}>
                {'<Root>'}
            </BreadcrumbsItem>,
        ];
        if (nodeHost) {
            result.push(
                <BreadcrumbsItem
                    key="<Root>"
                    href={makeComponentsNodesUrl({cluster, host: nodeHost})}
                >
                    {nodeHost}
                </BreadcrumbsItem>,
            );
        }
        return result;
    }, [cluster, nodeHost]);

    return (
        <Breadcrumbs navigate={history.push} showRoot className={block('breadcrumbs')}>
            {items}
        </Breadcrumbs>
    );
}

export default React.memo(ComponentsTopRowContent);
