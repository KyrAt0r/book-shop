import { IconHeart, IconShoppingCart } from '@tabler/icons-react';
import { ActionIcon, Badge, Button, Card, Group, Image, Stack, Text } from '@mantine/core';
import type { Book } from '@/shared/types/book';
import classes from './BookCard.module.css';

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  const { title, bookCoverLink, author, genres, description, price } = book;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.bookCard}>
      {/* Картинка сверху */}

      <Image src={bookCoverLink} height={600} alt={`${title} cover`} />

      {/* Контент */}
      <Stack mt="md">
        {/* Название книги */}
        <Text fw={500} size="lg">
          {title}
        </Text>

        {/* Автор */}
        <Text fw={400}>
          {author}
        </Text>

        {/* Описание */}
        <Text size="sm" c="dimmed" lineClamp={3}>
          {description}
        </Text>

        {/* Жанры */}
        <Group mt="xs" position="center">
          {genres.map((genre) => (
            <Badge variant="light" key={genre}>
              {genre}
            </Badge>
          ))}
        </Group>
      </Stack>

      {/* Цена и кнопки */}
      <Group mt="md" align="center">
        <Text fz="xl" fw={700}>
          {price} Руб.
        </Text>
        <Group>
          <Button radius="md" aria-label="Добавить в корзину">
            В корзину <IconShoppingCart stroke={1.5} />
          </Button>
          <ActionIcon variant="default" radius="md" size={36} aria-label="Добавить в избранное">
            <IconHeart stroke={1.5} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
};
