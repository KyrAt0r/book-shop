import { IconBook2, IconHeart, IconShoppingCart } from '@tabler/icons-react';
import { Link } from 'react-router-dom'; // Импортируем Link из react-router-dom
import { Group } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import classes from './Header.module.css';

const links = [
  { link: '/favorites', label: 'Избранное', icon: <IconHeart stroke={2} /> },
  { link: '/cart', label: 'Корзина', icon: <IconShoppingCart stroke={2} /> },
];

export const Header = () => {
  const items = links.map((link) => (
    <Link key={link.label} to={link.link} className={classes.link}>
      {link.icon}
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Link to="/" className={classes.link}>
            Магазин Книг
            <IconBook2 stroke={2} />
          </Link>
        </Group>
        <Group>
          <Group ml={50} gap={15} className={classes.links} visibleFrom="sm">
            <ColorSchemeToggle />
            {items}
          </Group>
        </Group>
      </div>
    </header>
  );
};
