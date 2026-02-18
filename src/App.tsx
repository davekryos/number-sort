import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';

type StatCardProps = {
  label: string;
  value: string;
  subtext?: string;
};

function StatCard({ label, value, subtext }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-cyan-100/15 bg-white/[0.04] p-4 shadow-[0_10px_30px_rgba(4,10,28,0.4)] backdrop-blur-md"
    >
      <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-100/65">{label}</p>
      <p className="mt-2 text-2xl font-semibold leading-none text-white">{value}</p>
      {subtext ? <p className="mt-2 text-sm text-cyan-100/75">{subtext}</p> : null}
    </motion.div>
  );
}

function StakePage() {
  const [stakeInput, setStakeInput] = useState('2500');
  const [unstakeInput, setUnstakeInput] = useState('500');

  const estimatedDailyReward = useMemo(() => {
    const amount = Number(stakeInput) || 0;
    return ((amount * 0.00095) / 1).toFixed(2);
  }, [stakeInput]);

  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-cyan-100/20 bg-gradient-to-br from-cyan-400/20 via-slate-900/60 to-emerald-400/10 p-6 md:p-8"
      >
        <div className="absolute -left-14 -top-14 h-44 w-44 rounded-full bg-cyan-300/20 blur-2xl" />
        <div className="absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-emerald-300/10 blur-3xl" />
        <p className="text-xs uppercase tracking-[0.26em] text-cyan-100/70">Turbo Staking Engine</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
          Stake / Unstake
          <br />
          canlı reward paneli
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-cyan-100/80">
          Staking ödülleri işlem fee&apos;sinden gelen günlük %1 paydan dağıtılır. Ödüller PNIC ve TURBO olarak dinamik
          hesaplanır.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          {['No Lock Period', 'Dual Rewards (TURBO+PNIC)', 'Instant Claimable'].map((chip) => (
            <span key={chip} className="rounded-full border border-cyan-100/25 bg-black/25 px-3 py-1 text-cyan-50">
              {chip}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Contract Pool" value="$1,824,450" subtext="Stake gelirlerinden biriken toplam" />
        <StatCard label="Your Staked" value="18,900 TURBO" subtext="Aktif stake bakiyen" />
        <StatCard label="Pending Reward (TURBO)" value="352.40 TURBO" subtext="Claim edilebilir" />
        <StatCard label="Pending Reward (PNIC)" value="171.25 PNIC" subtext="Claim edilebilir" />
      </div>

      <div className="rounded-2xl border border-cyan-100/15 bg-slate-950/35 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/65">Fee Distribution (LP Trades)</p>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800/80">
          <div className="h-full w-1/2 bg-cyan-300" />
          <div className="-mt-3 h-full w-1/4 bg-emerald-300" />
          <div className="-mt-3 h-full w-1/4 bg-amber-300" />
        </div>
        <div className="mt-2 grid gap-2 text-xs text-cyan-100/80 md:grid-cols-3">
          <p>2% Competition Pool</p>
          <p>1% Staking Rewards</p>
          <p>1% Company Revenue</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-emerald-300/30 bg-gradient-to-br from-emerald-400/20 to-black/35 p-5">
          <h2 className="text-lg font-medium text-white">Stake TURBO</h2>
          <p className="mt-1 text-sm text-emerald-100/85">Wallet bakiyesi: 25,420 TURBO</p>
          <label className="mt-4 block text-xs uppercase tracking-[0.15em] text-emerald-100/75">Amount</label>
          <input
            className="mt-2 w-full rounded-xl border border-emerald-200/35 bg-black/30 px-4 py-3 text-white outline-none focus:border-emerald-300"
            value={stakeInput}
            onChange={(event) => setStakeInput(event.target.value)}
            placeholder="0.00"
            inputMode="decimal"
          />
          <p className="mt-3 text-sm text-emerald-100/85">Tahmini günlük reward: {estimatedDailyReward} TURBO</p>
          <button className="mt-4 w-full rounded-xl bg-emerald-300 px-4 py-3 font-semibold text-emerald-950 transition hover:brightness-110">
            Stake Now
          </button>
        </div>

        <div className="rounded-2xl border border-amber-300/30 bg-gradient-to-br from-amber-300/20 to-black/35 p-5">
          <h2 className="text-lg font-medium text-white">Unstake TURBO</h2>
          <p className="mt-1 text-sm text-amber-100/85">Lock yok: istediğin an unstake yapabilirsin</p>
          <label className="mt-4 block text-xs uppercase tracking-[0.15em] text-amber-100/75">Amount</label>
          <input
            className="mt-2 w-full rounded-xl border border-amber-200/35 bg-black/30 px-4 py-3 text-white outline-none focus:border-amber-300"
            value={unstakeInput}
            onChange={(event) => setUnstakeInput(event.target.value)}
            placeholder="0.00"
            inputMode="decimal"
          />
          <p className="mt-3 text-sm text-amber-100/85">Tahmini serbest kalma: anlık</p>
          <button className="mt-4 w-full rounded-xl bg-amber-300 px-4 py-3 font-semibold text-amber-950 transition hover:brightness-110">
            Unstake
          </button>
        </div>
      </div>
    </section>
  );
}

function SwapPage() {
  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-cyan-100/20 bg-gradient-to-br from-cyan-400/20 via-blue-950/50 to-slate-900/70 p-6"
      >
        <p className="text-xs uppercase tracking-[0.26em] text-cyan-100/70">Miracle DEX Ready</p>
        <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Swap Gateway</h1>
        <p className="mt-3 max-w-2xl text-sm text-cyan-100/80">
          Initial pair Miracle DEX üzerinde <span className="font-semibold text-cyan-50">TURBO/PNIC</span>. Buy-sell
          işlemlerinde dinamik %4 fee uygulanır, transfer/stake/unstake muaf.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Route" value="TURBO / PNIC" subtext="Miracle DEX LP" />
        <StatCard label="Dynamic Fee" value="%4.00" subtext="2% competition / 1% staking / 1% company" />
        <StatCard label="24h LP Volume" value="$2.6M" subtext="TURBO-PNIC havuzu" />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-cyan-100/15 bg-slate-950/40 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/65">Miracle DEX Integration Slot</p>
          <div className="mt-3 rounded-2xl border border-dashed border-cyan-200/30 bg-gradient-to-b from-cyan-400/10 to-transparent p-8 text-center">
            <p className="text-2xl font-semibold text-white">Swap Widget Placeholder</p>
            <p className="mt-2 text-sm text-cyan-100/70">
              Widget mount point: <code>#miracle-dex-widget</code>
            </p>
            <button className="mt-5 rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-cyan-950 transition hover:brightness-110">
              Connect Wallet
            </button>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/65">Fee Breakdown</p>
          {[
            { label: 'Competition Pool', value: '2%', color: 'bg-cyan-300' },
            { label: 'Staking Rewards', value: '1%', color: 'bg-emerald-300' },
            { label: 'Company Revenue', value: '1%', color: 'bg-amber-300' },
          ].map((item) => (
            <div key={item.label}>
              <div className="mb-1 flex items-center justify-between text-sm text-cyan-50">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <div className={`h-full ${item.color}`} style={{ width: item.value === '2%' ? '50%' : '25%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompetitionPage() {
  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-fuchsia-200/20 bg-gradient-to-br from-fuchsia-500/20 via-slate-900/60 to-cyan-500/20 p-6"
      >
        <p className="text-xs uppercase tracking-[0.26em] text-fuchsia-100/70">Daily Trading Competition</p>
        <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Leaderboard Arena</h1>
        <p className="mt-3 max-w-2xl text-sm text-fuchsia-100/80">
          Yarışma her 24 saatte sıfırlanır. Günlük fee&apos;nin %2&apos;si prize pool&apos;a gider ve en yüksek hacimli ilk 5
          kullanıcı ödüllendirilir.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Daily Prize Pool" value="42,180 TURBO" subtext="Fee pool + company top-up" />
        <StatCard label="Participants" value="8,452" subtext="Aktif yarışmacı" />
        <StatCard label="Time Left" value="11h 34m" subtext="Günlük tur bitişi" />
        <StatCard label="Your Rank" value="#7" subtext="Hedef: Top 5" />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Buy Multiplier" value="x2" subtext="1000 buy => 2000 yarışma hacmi" />
        <StatCard label="Sell Multiplier" value="x1" subtext="1000 sell => 1000 yarışma hacmi" />
        <StatCard label="Winners" value="Top 5" subtext="Panelden ayarlanabilir (Top 1-10)" />
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
        <div className="grid grid-cols-[0.7fr_1.8fr_1.2fr_1fr] gap-3 border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.18em] text-cyan-100/65">
          <span>#</span>
          <span>Trader</span>
          <span>Volume</span>
          <span>PnL</span>
        </div>

        {[
          { rank: 1, name: 'turbo_whale', volume: '4,820,000 pts', pnl: '+18.2%' },
          { rank: 2, name: 'dex_hunter', volume: '4,111,400 pts', pnl: '+16.9%' },
          { rank: 3, name: 'alpha_bot', volume: '3,628,250 pts', pnl: '+14.4%' },
          { rank: 7, name: 'you', volume: '1,980,500 pts', pnl: '+9.1%' },
        ].map((row) => (
          <div
            key={row.rank + row.name}
            className={`grid grid-cols-[0.7fr_1.8fr_1.2fr_1fr] gap-3 px-4 py-3 text-sm text-cyan-50 ${
              row.name === 'you' ? 'bg-cyan-300/10' : 'border-b border-white/5'
            }`}
          >
            <span>{row.rank}</span>
            <span className={row.name === 'you' ? 'font-semibold text-cyan-200' : ''}>{row.name}</span>
            <span>{row.volume}</span>
            <span className="text-emerald-300">{row.pnl}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Shell() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_12%_12%,rgba(56,189,248,0.22),transparent_36%),radial-gradient(circle_at_88%_18%,rgba(217,70,239,0.18),transparent_34%),radial-gradient(circle_at_62%_86%,rgba(52,211,153,0.14),transparent_34%),linear-gradient(160deg,#020817_0%,#051123_45%,#150b2a_100%)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
        <header className="mb-6 flex flex-col gap-4 rounded-3xl border border-cyan-100/20 bg-black/30 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/65">Turbo Token Hub</p>
            <p className="mt-1 text-2xl font-semibold text-white">DeFi Command Center</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: 'Stake', to: '/stake' },
              { label: 'Swap', to: '/swap' },
              { label: 'Competition', to: '/competition' },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? 'bg-cyan-300 font-semibold text-cyan-950 shadow-[0_8px_20px_rgba(34,211,238,0.35)]'
                      : 'border border-cyan-100/20 bg-black/30 text-cyan-100 hover:border-cyan-200/55'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button className="rounded-full border border-fuchsia-200/35 bg-fuchsia-300/90 px-4 py-2 text-sm font-semibold text-fuchsia-950 transition hover:brightness-110">
              Connect Wallet
            </button>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/stake" replace />} />
            <Route path="/stake" element={<StakePage />} />
            <Route path="/swap" element={<SwapPage />} />
            <Route path="/competition" element={<CompetitionPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Shell;
