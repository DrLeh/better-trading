// Vendor
import Service from '@ember/service';
import window from 'ember-window-mock';

interface ParsedPath {
  tab: string;
  league: string;
  slug?: string;
}

export default class TradeLocation extends Service {
  get league(): string {
    const {league} = this.parseCurrentPath();

    return league;
  }

  get slug(): string | null {
    const {slug} = this.parseCurrentPath();
    if (!slug) return null;

    return slug;
  }

  private parseCurrentPath(): ParsedPath {
    const [tab, league, slug] = window.location.pathname
      .replace('/trade/', '')
      .split('/');

    return {tab, league, slug};
  }
}

declare module '@ember/service' {
  interface Registry {
    'trade-location': TradeLocation;
  }
}