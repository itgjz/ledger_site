import Layout from '@/layout';

const serviceRouter = {
    path: '/service',
    component: Layout,
    redirect: '/srvice/index',
    children: [
        {
            path: 'index',
            component: () => import('@/views/service/index'),
            name: 'service',
            meta: { title: '服务管理', icon: 'dashboard', noCache: true }
        }
    ]
}

export default serviceRouter