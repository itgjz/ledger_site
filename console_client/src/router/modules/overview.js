/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const overviewRouter = {
    path: '/',
    component: Layout,
    redirect: '/overview',
    children: [
        {
            path: 'overview',
            component: () => import('@/views/overview/index'),
            name: 'overView',
            meta: { title: '总览', icon: 'dashboard', noCache: true, affix: true },
            
        }
    ]
}
export default overviewRouter
