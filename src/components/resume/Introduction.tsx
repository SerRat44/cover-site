import {
  Box,
  Text,
  Title,
  Paper,
  Badge,
  Group,
  Button,
  Stack,
  Avatar,
  Flex,
  ActionIcon,
  Container,
} from "@mantine/core";
import { resumeConfig } from "@/configs/resumeConfig";
import Styles from "./resume.module.css";
import { TbBrandGithub } from "react-icons/tb";

export function Introduction() {
  return (
    <Container size="lg" w="100%">
      <Paper radius="md" className="back-bg" withBorder w="100%">
        <Stack gap="md" my="xl" mx="lg">
          <Group justify="space-between" align="flex-start" wrap="wrap">
            <Group gap="md">
              <Avatar.Group spacing="lg">
                <Avatar
                  className={Styles.avatar}
                  src="/images/Joe-pfp.webp"
                  alt="Joe Mckenzie"
                  size={75}
                  radius="xl"
                  style={{ zIndex: 10 }}
                />
                <Avatar
                  className={Styles.avatar}
                  src="/images/SerRat44-pfp.webp"
                  alt="SerRat44"
                  size={75}
                  radius="xl"
                  style={{
                    imageRendering: "pixelated",
                    zIndex: 5,
                  }}
                />
              </Avatar.Group>

              <Box>
                <Group gap="xs" align="center">
                  <Title order={1} size="h2" lh={1.2}>
                    Joe Mckenzie
                  </Title>
                  <Badge variant="default" size="lg" radius="md" tt="none">
                    @SerRat44
                  </Badge>
                </Group>

                <Text size="lg" c="dimmed" fw={500} mt={2}>
                  Full-Stack Web Developer
                </Text>
              </Box>
            </Group>

            <Group gap="xs">
              <Button
                variant="default"
                size="sm"
                component="a"
                href={resumeConfig.upwork}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Upwork Profile
              </Button>
              <ActionIcon
                variant="filled"
                color="primary"
                size="input-sm"
                component="a"
                href={resumeConfig.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandGithub className="icon" />
              </ActionIcon>
            </Group>
          </Group>

          <Text size="md" maw="80ch">
            React / Next.js developer specialising in fast, modern, and
            responsive websites. I build everything from landing pages to full
            web applications using SSR or static generation with optional
            deployment, hosting, and ongoing maintenance. I also offer API
            integrations, SEO, and basic API development.
          </Text>

          {/* Core Tech Stack Badges */}
          <Group gap="xs" mt="sm">
            <Badge variant="dot" color="cyan">
              TypeScript
            </Badge>
            <Badge variant="dot" color="blue">
              React
            </Badge>
            <Badge variant="dot" color="violet">
              Next.js
            </Badge>
            <Badge variant="dot" color="orange">
              Web Hosting
            </Badge>
            <Badge variant="dot" color="yellow">
              API Integration
            </Badge>
            <Badge variant="dot" color="teal">
              SEO
            </Badge>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
}
