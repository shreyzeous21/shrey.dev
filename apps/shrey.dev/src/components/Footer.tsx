import clsx from 'clsx';

import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/Icons';

import dayjs from '@/utils/dayjs';

function FooterDescription() {
  return (
    <div className={clsx('max-w-[348px]')}>
      <div
        className={clsx(
          'mb-3 text-[13px] text-slate-600',
          'dark:text-slate-400'
        )}
      >
        About Me
      </div>
      <p className={clsx('mb-4 font-normal leading-relaxed')}>
        I&apos;m Shrey, a <strong>front-end developer</strong> who loves to
        tinker with new technologies and build cool stuff. I&apos;m currently
        woking with Next js.
      </p>
      <ul className={clsx('-ml-2 flex gap-1')}>
        <li>
          <a
            href="https://github.com/shreyzeous21/"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="My GitHub profile"
            title="My GitHub profile"
          >
            <GitHubIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shrey-sadhukhan-a96590201/"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="My LinkedIn profile"
            title="My LinkedIn profile"
          >
            <LinkedInIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className={clsx(
        'background-grid background-grid--fade-in border-divider-light mt-5 pt-16 text-sm text-slate-900',
        'dark:border-divider-dark dark:text-slate-200'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('py-10 font-semibold')}>
          <div className={clsx('flex flex-col-reverse', 'lg:flex-row')}>
            <div className={clsx('flex-1')}>
              <FooterDescription />
            </div>
            {/* <div className={clsx('flex flex-1 flex-col sm:flex-row')}>
              <img
                className="h-30 w-60"
                alt="Github Stats"
                src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=maheshbabu11&theme=transparent"
              />
              <img
                className="h-50 w-80"
                alt="Github Profile Summary"
                src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=maheshbabu11&theme=transparent"
              />
            </div> */}
          </div>
        </div>
        <div
          className={clsx(
            'border-divider-light flex justify-between border-t py-6 text-xs',
            'dark:border-divider-dark'
          )}
        >
          <div className={clsx('font-semibold')}>
            &copy; {dayjs().format('YYYY')}, Shrey Sadhukhan
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
