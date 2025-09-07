export const sidebarLinks = [
  { label: 'Home', path: '/', icon: '🎰' },
  { label: 'Slots', path: '/slots', icon: '🎲' },
  { label: 'Blackjack', path: '/blackjack', icon: '🃏' },
  { label: 'Roulette', path: '/roulette', icon: '🎡' },
  { label: 'Promotions', path: '/promotions', icon: '💰' },
  { label: 'VIP Club', path: '/vip', icon: '👑' },
];

export function generateRoutesFromSidebar() {
  // Ensures unique paths and returns a map for quick lookup
  const pathSet = new Set();
  const routes = [];
  for (const link of sidebarLinks) {
    if (!pathSet.has(link.path)) {
      pathSet.add(link.path);
      routes.push({ path: link.path, label: link.label });
    }
  }
  return routes;
}