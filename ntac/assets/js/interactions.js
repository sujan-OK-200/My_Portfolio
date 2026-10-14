(() => {
  const output = document.getElementById('terminal-output');
  const reset = document.getElementById('terminal-reset');
  const commands = {
    services: ['NTAC / CYBERSECURITY', 'VAPT: scoped assessment, validation, and remediation guidance.', 'GRC: risk, controls, policy, and readiness support.', 'Social engineering: authorized awareness and learning.'],
    data: ['NTAC / DATA', 'Ingest → transform → validate → deliver.', 'Focus areas: pipelines, data quality, integration, and reporting.', 'Displayed pipeline is a concept illustration, not a live service.'],
    learn: ['NTAC / ACADEMY', 'Start with networking, Linux, SQL, and core concepts.', 'Practice in safe labs; document what you learn.', 'Build small projects and explain your reasoning.'],
    principles: ['NTAC / PRINCIPLES', 'Permission before testing.', 'Minimize data collection and protect confidential information.', 'Explain risk clearly; recommend practical improvements.']
  };
  function render(command) {
    if (!output) return;
    output.replaceChildren();
    const prompt = document.createElement('p');
    const prefix = document.createElement('span'); prefix.className = 'term-prompt'; prefix.textContent = 'ntac@workspace:~$ ';
    const entered = document.createElement('span'); entered.className = 'term-command'; entered.textContent = command;
    prompt.append(prefix, entered); output.append(prompt);
    const lines = commands[command] || ['Available commands: services · data · learn · principles'];
    lines.forEach((line, index) => {
      const p = document.createElement('p');
      p.className = index === 0 ? 'term-accent' : 'term-muted';
      p.textContent = line;
      output.append(p);
    });
  }
  document.querySelectorAll('[data-command]').forEach(button => button.addEventListener('click', () => render(button.dataset.command)));
  reset?.addEventListener('click', () => {
    if (!output) return;
    output.replaceChildren();
    const first = document.createElement('p');
    const prompt = document.createElement('span'); prompt.className = 'term-prompt'; prompt.textContent = 'ntac@workspace:~$ ';
    const command = document.createElement('span'); command.className = 'term-command'; command.textContent = 'help';
    first.append(prompt, command);
    const second = document.createElement('p'); second.className = 'term-muted'; second.textContent = 'Welcome to the NTAC concept terminal. Choose a command below to explore the site.';
    const third = document.createElement('p'); third.innerHTML = '<span class="term-prompt">available commands:</span> <span class="term-accent">services · data · learn · principles</span>';
    output.append(first, second, third);
  });

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (status) {
      status.classList.add('is-notice');
      status.textContent = 'Demo preview only. Your message was not sent, uploaded, or stored.';
    }
  });
})();
