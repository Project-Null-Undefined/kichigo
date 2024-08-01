import { useState, type ReactElement } from 'react';
import FragmentSearchPresentational from '@/features/presentational/FragmentSearch';

export default function FragmentSearchContainer(): ReactElement {
  const [input, setInput] = useState('');

  const performSearch = (): void => {
    // TODO : リクエストの処理を記述
  };

  return <FragmentSearchPresentational input={input} performSearch={performSearch} setInput={setInput} />;
}
