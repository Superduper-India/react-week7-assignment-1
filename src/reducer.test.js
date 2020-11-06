import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  changeLoginField,
  setAccessToken,
  logout,
  changeReviewField,
} from './actions';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: null,
      selectedRegion: null,
      selectedCategory: null,
      loginFields: {
        email: '',
        password: '',
      },
      accessToken: '',
      reviewFields: {
        score: '',
        description: '',
      },
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('setRestaurant', () => {
    it('changes restaurant', () => {
      const initialState = {
        restaurant: null,
      };

      const restaurant = { id: 1, name: '마법사주방' };

      const state = reducer(initialState, setRestaurant(restaurant));

      expect(state.restaurant.id).toBe(1);
      expect(state.restaurant.name).toBe('마법사주방');
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories: [
          { id: 1, name: '한식' },
        ],
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });

  describe('changeLoginField', () => {
    const initialState = {
      loginFields: {
        email: '',
        password: '',
      },
    };
    context('when email field is changed', () => {
      const state = reducer(
        initialState,
        changeLoginField({ name: 'email', value: 'newEmail' }),
      );

      it('changes email', () => {
        expect(state.loginFields).toEqual({
          email: 'newEmail',
          password: '',
        });
      });
    });

    context('when password field is changed', () => {
      const state = reducer(
        initialState,
        changeLoginField({ name: 'password', value: 'newPassword' }),
      );

      it('changes password', () => {
        expect(state.loginFields).toEqual({
          email: '',
          password: 'newPassword',
        });
      });
    });
  });

  describe('setAccessToken', () => {
    it('changes accessToken', () => {
      const initialState = {
        accessToken: '',
      };

      const state = reducer(initialState, setAccessToken('ACCESS_TOKEN'));

      expect(state.accessToken).toBe('ACCESS_TOKEN');
    });
  });

  describe('logout', () => {
    it('changes accessToken', () => {
      const initialState = {
        accessToken: 'ACCESS_TOKEN',
      };

      const state = reducer(initialState, logout());

      expect(state.accessToken).toBe('');
    });
  });

  describe('changeReviewField', () => {
    const initialState = {
      reviewFields: {
        score: '',
        description: '',
      },
    };

    context('when score field is changed', () => {
      const state = reducer(
        initialState,
        changeReviewField({ name: 'score', value: '5' }),
      );

      it('changes score', () => {
        expect(state.reviewFields).toEqual({
          score: '5',
          description: '',
        });
      });
    });

    context('when description field is changed', () => {
      const state = reducer(
        initialState,
        changeReviewField({ name: 'description', value: 'newDescription' }),
      );

      it('changes description', () => {
        expect(state.reviewFields).toEqual({
          score: '',
          description: 'newDescription',
        });
      });
    });
  });
});
