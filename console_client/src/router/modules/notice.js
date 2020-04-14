/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const noticeRouter = {
    path: '/notice',
    component: Layout,
    redirect: '/notice/index',
    children: [
        {
            path: 'index',
            component: () => import('@/views/notice/index'),
            name: 'notice',
            meta: { title: '通知管理', icon: 'dashboard', noCache: true }
        }
    ]
}
export default noticeRouter
