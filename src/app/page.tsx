"use client";

import {
  Box,
  Text,
  Flex,
  Title,
  Container,
  Paper,
  Badge,
  Group,
  SimpleGrid,
  Button,
  Stack,
  ThemeIcon,
  List,
  Divider,
} from "@mantine/core";
import Link from "next/link";
import {
  TbCode,
  TbRocket,
  TbCheck,
  TbArrowRight,
  TbShoppingCart,
  TbBuildingStore,
  TbLayoutGrid,
  TbArticle,
} from "react-icons/tb";
import { pageConfig } from "@/configs/pageConfig";

export default function Home() {
  return (
    <Container size="xl" py="lg">
      <Stack gap="xl">
        {/* 1. HERO / PERSONAL PROFILE SECTION */}
        <Paper
          p={{ base: "md", md: "xl" }}
          radius="md"
          className="paper"
          withBorder
        >
          <Stack gap="md">
            <Group justify="space-between" align="flex-start" wrap="wrap">
              <Box>
                <Badge size="lg" variant="filled" color="primary" mb="xs">
                  Available for Hire on Upwork
                </Badge>
                <Title order={1} size="h1">
                  SerRat44
                </Title>
                <Text size="xl" c="dimmed" fw={500}>
                  Frontend Engineer & Full-Stack Solutions Integrator
                </Text>
              </Box>

              <Group gap="xs">
                <Button variant="default" size="sm">
                  View Upwork Profile
                </Button>
                <Button variant="filled" color="primary" size="sm">
                  Contact Me
                </Button>
              </Group>
            </Group>

            <Text size="md" style={{ maxWidth: 800 }}>
              I specialize in building high-performance, modern web applications
              using <strong>Next.js App Router</strong>,{" "}
              <strong>Mantine UI</strong>, and clean API architecture. Whether
              you need a lightning-fast SaaS landing page, a custom e-commerce
              checkout, or an SEO-driven local business site, I build
              production-ready software focused on speed and conversion.
            </Text>

            {/* Core Tech Stack Badges */}
            <Group gap="xs" mt="xs">
              <Badge variant="dot" color="blue">
                Next.js 14+
              </Badge>
              <Badge variant="dot" color="cyan">
                TypeScript
              </Badge>
              <Badge variant="dot" color="teal">
                Mantine UI
              </Badge>
              <Badge variant="dot" color="grape">
                Stripe Integration
              </Badge>
              <Badge variant="dot" color="orange">
                REST / GraphQL APIs
              </Badge>
              <Badge variant="dot" color="green">
                Technical SEO
              </Badge>
            </Group>
          </Stack>
        </Paper>

        {/* 2. INTERACTIVE DEMO CATALOG */}
        <Box>
          <Group justify="space-between" mb="md">
            <Box>
              <Title order={2} size="h2">
                Live Interactive Demos
              </Title>
              <Text c="dimmed" size="sm">
                Explore working builds designed for common freelancing client
                requirements.
              </Text>
            </Box>
          </Group>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {/* SaaS / Product Demo Card */}
            <Paper p="md" radius="md" withBorder className="paper">
              <Stack justify="space-between" h="100%">
                <Box>
                  <ThemeIcon
                    size="xl"
                    radius="md"
                    color="blue"
                    variant="light"
                    mb="sm"
                  >
                    <TbRocket size={24} />
                  </ThemeIcon>
                  <Title order={3} size="h4" mb="xs">
                    SaaS Landing & Subscriptions
                  </Title>
                  <Text size="sm" c="dimmed" mb="md">
                    Animated feature matrix, monthly/yearly toggle, and Stripe
                    subscription checkout.
                  </Text>
                </Box>
                <Button
                  component={Link}
                  href="/saas"
                  variant="light"
                  rightSection={<TbArrowRight size={16} />}
                  fullWidth
                >
                  Test Drive Demo
                </Button>
              </Stack>
            </Paper>

            {/* E-Commerce Demo Card */}
            <Paper p="md" radius="md" withBorder className="paper">
              <Stack justify="space-between" h="100%">
                <Box>
                  <ThemeIcon
                    size="xl"
                    radius="md"
                    color="grape"
                    variant="light"
                    mb="sm"
                  >
                    <TbShoppingCart size={24} />
                  </ThemeIcon>
                  <Title order={3} size="h4" mb="xs">
                    E-Commerce Storefront
                  </Title>
                  <Text size="sm" c="dimmed" mb="md">
                    Dynamic cart drawer, product variant selectors, and
                    single-product checkout flow.
                  </Text>
                </Box>
                <Button
                  component={Link}
                  href="/e-commerce"
                  variant="light"
                  rightSection={<TbArrowRight size={16} />}
                  fullWidth
                >
                  Test Drive Demo
                </Button>
              </Stack>
            </Paper>

            {/* Local Business Demo Card */}
            <Paper p="md" radius="md" withBorder className="paper">
              <Stack justify="space-between" h="100%">
                <Box>
                  <ThemeIcon
                    size="xl"
                    radius="md"
                    color="teal"
                    variant="light"
                    mb="sm"
                  >
                    <TbBuildingStore size={24} />
                  </ThemeIcon>
                  <Title order={3} size="h4" mb="xs">
                    Service Business & Booking
                  </Title>
                  <Text size="sm" c="dimmed" mb="md">
                    High-converting lead capture, booking form validation, and
                    Google Maps integration.
                  </Text>
                </Box>
                <Button
                  component={Link}
                  href="/local-business"
                  variant="light"
                  rightSection={<TbArrowRight size={16} />}
                  fullWidth
                >
                  Test Drive Demo
                </Button>
              </Stack>
            </Paper>

            {/* Portfolio / Agency Demo Card */}
            <Paper p="md" radius="md" withBorder className="paper">
              <Stack justify="space-between" h="100%">
                <Box>
                  <ThemeIcon
                    size="xl"
                    radius="md"
                    color="orange"
                    variant="light"
                    mb="sm"
                  >
                    <TbLayoutGrid size={24} />
                  </ThemeIcon>
                  <Title order={3} size="h4" mb="xs">
                    Agency & Showcase Grid
                  </Title>
                  <Text size="sm" c="dimmed" mb="md">
                    Filterable portfolio gallery, interactive lightbox viewer,
                    and multi-step quote request.
                  </Text>
                </Box>
                <Button
                  component={Link}
                  href="/portfolio"
                  variant="light"
                  rightSection={<TbArrowRight size={16} />}
                  fullWidth
                >
                  Test Drive Demo
                </Button>
              </Stack>
            </Paper>

            {/* SEO Content / Blog Demo Card */}
            <Paper p="md" radius="md" withBorder className="paper">
              <Stack justify="space-between" h="100%">
                <Box>
                  <ThemeIcon
                    size="xl"
                    radius="md"
                    color="green"
                    variant="light"
                    mb="sm"
                  >
                    <TbArticle size={24} />
                  </ThemeIcon>
                  <Title order={3} size="h4" mb="xs">
                    SEO & Content Hub
                  </Title>
                  <Text size="sm" c="dimmed" mb="md">
                    Fast article feeds, structured JSON-LD metadata, and search
                    indexing optimization.
                  </Text>
                </Box>
                <Button
                  component={Link}
                  href="/blog"
                  variant="light"
                  rightSection={<TbArrowRight size={16} />}
                  fullWidth
                >
                  Test Drive Demo
                </Button>
              </Stack>
            </Paper>
          </SimpleGrid>
        </Box>

        {/* 3. WORKING WITH ME / STANDARDS */}
        <Paper p="xl" radius="md" withBorder className="paper">
          <Title order={2} size="h3" mb="md">
            Development Standards & What You Can Expect
          </Title>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="green" size={20} radius="xl">
                  <TbCheck size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <strong>Pixel-Perfect & Fully Responsive:</strong> Clean layouts
                tested across mobile, tablet, and ultra-wide desktops.
              </List.Item>
              <List.Item>
                <strong>Type-Safe & Scalable Code:</strong> Strict TypeScript
                usage for bug-free components and maintainable codebases.
              </List.Item>
              <List.Item>
                <strong>Lightning Fast Core Web Vitals:</strong> SSR and image
                optimization techniques to score 90+ on Google Lighthouse.
              </List.Item>
            </List>

            <List
              spacing="sm"
              icon={
                <ThemeIcon color="green" size={20} radius="xl">
                  <TbCheck size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <strong>Stripe Payments & Webhooks:</strong> Clean payment
                integration with secure server-side verification.
              </List.Item>
              <List.Item>
                <strong>Production Deployment Ready:</strong> Fast turnarounds
                hosted on Vercel or Netlify with custom domain mapping.
              </List.Item>
              <List.Item>
                <strong>Clear Communication:</strong> Daily status updates and
                live staging links throughout the project build.
              </List.Item>
            </List>
          </SimpleGrid>
        </Paper>
      </Stack>
    </Container>
  );
}
