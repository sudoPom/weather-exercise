import { render, screen, waitFor } from '@testing-library/react';
import Weather from '../Weather';
import axios from 'axios';
jest.mock('axios')

describe('weather tests', () => {
    it('renders the correct weather data', async () => {
        let get = axios.get.mockImplementationOnce(() => Promise.resolve({data: {weather: [{description: 'light rain'}]}}))
        render(<Weather />);
        await waitFor(() => expect(get).toHaveBeenCalledTimes(1))
        const currentWeather = screen.queryByTestId('weather');
        expect(currentWeather).toHaveTextContent('light rain')
      });
})

