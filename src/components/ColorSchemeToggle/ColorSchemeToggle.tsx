import { Button, Group, useMantineColorScheme } from '@mantine/core';
import {IconBrightnessUp, IconMoon} from "@tabler/icons-react";

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center">
      <Button onClick={toggleColorScheme}>
        {colorScheme === 'dark' ? (
          <>
            <IconBrightnessUp stroke={2} />
          </>
        ) : (
          <>
            <IconMoon stroke={2} />
          </>
        )}
      </Button>
    </Group>
  );
}
