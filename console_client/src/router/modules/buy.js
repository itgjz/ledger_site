import Layout from '@/layout';

const buyRouter = {
    path: '/buy',
    component: Layout,
    redirect: '/buy/index',
    hidden: true,
    children: [
        {
            path: 'index',
            component: () => import('@/views/buy/index'),
            name: 'Buy',
            meta: { title: '购买区块链服务', icon: 'user', noCache: false }
        }
    ]
}

export default buyRouter

