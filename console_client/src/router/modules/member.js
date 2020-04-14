/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const memberRouter = {
    path: '/member',
    component: Layout,
    redirect: '/member/index',
    children: [
        {
            path: 'index',
            component: () => import('@/views/member/index'),
            name: 'member',
            meta: { title: '成员管理', icon: 'dashboard', noCache: true }
        }
    ]
}
export default memberRouter