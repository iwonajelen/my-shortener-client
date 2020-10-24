import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Shortener.module.css';
import {
  selectUrl,
  shortenUrl
} from './shortenerSlice';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export function Shortener() {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const shortUrl = useSelector(selectUrl);

  const clickShortenUrl = async () => {
    setCopied(false);
    try {
        await dispatch(shortenUrl(url));
    }
    catch { }
    finally { }
  } 

  const copyToClipboard = (
    <CopyToClipboard className={styles.button + (copied ?  ' ' + styles.success : '')} text={shortUrl}
        onCopy={() => setCopied(true)}>
        <button>Copy to clipboard</button>
    </CopyToClipboard>
  )

  return(
    <div>
        <div className={styles.row}>
            <input
            className={styles.textbox}
            value={url}
            onChange={e => setUrl(e.target.value)}
            />
            <button
            className={styles.button}
            onClick={clickShortenUrl}
            >
            Shorten
            </button>
        </div>
        <div className={styles.row}>
            <span className={styles.value}>{shortUrl}</span>
        </div>
        <div className={styles.row}>
            {shortUrl && copyToClipboard}
        </div>
    </div>
  );
}