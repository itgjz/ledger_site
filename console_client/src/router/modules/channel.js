import Layout from '@/layout';

const channelRouter = {
    path: '/channel',
    component: Layout,
    redirect: '/channel/index',
    children: [
        {
            path: 'index',
            component: () => import('@/views/channel/index'),
            name: 'channel',
            meta: { title: '通道管理', icon: 'dashboard', noCache: true }
        }
    ]
}

export default channelRouter