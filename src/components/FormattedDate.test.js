import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import FormattedDate from './FormattedDate.astro';

describe('FormattedDate', () => {
  it('renders a time element with datetime attribute', async () => {
    const container = await AstroContainer.create();
    const testDate = new Date('2024-06-15');
    const result = await container.renderToString(FormattedDate, {
      props: { date: testDate },
    });

    expect(result).toContain('<time');
    expect(result).toContain('datetime="2024-06-15T00:00:00.000Z"');
  });

  it('formats date in human-readable format', async () => {
    const container = await AstroContainer.create();
    const testDate = new Date('2024-06-15');
    const result = await container.renderToString(FormattedDate, {
      props: { date: testDate },
    });

    expect(result).toContain('Jun');
    expect(result).toContain('15');
    expect(result).toContain('2024');
  });

  it('uses semantic time element for accessibility', async () => {
    const container = await AstroContainer.create();
    const testDate = new Date('2024-01-01');
    const result = await container.renderToString(FormattedDate, {
      props: { date: testDate },
    });

    // time element with datetime provides machine-readable date for assistive technologies
    expect(result).toMatch(/<time[^>]+datetime=/);
  });
});
