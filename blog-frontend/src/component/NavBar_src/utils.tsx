export const navigation = [
    { name: 'Dashboard', href: '/dashboard', current: true },
    { name: 'Team', href: '/team', current: false },
    { name: 'Projects', href: '', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]
  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }

export default classNames