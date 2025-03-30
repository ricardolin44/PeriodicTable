/**
 * Parses an electron configuration string into shell electron counts
 * @param config The electron configuration string (e.g., "1s2 2s2 2p6")
 * @returns An object mapping shell numbers to electron counts
 */
export function parseElectronConfiguration(config: string): Record<string, number> {
  const shellCounts: Record<string, number> = {};
  
  // Handle special cases with noble gas notation
  const expandedConfig = expandNobleGasNotation(config);
  
  // Regular expression to match orbital patterns like "1s2", "2p6", etc.
  const orbitalPattern = /(\d+)([spdf])(\d+)/g;
  let match;
  
  while ((match = orbitalPattern.exec(expandedConfig)) !== null) {
    const [, shellNumber, , electronCount] = match;
    
    if (!shellCounts[shellNumber]) {
      shellCounts[shellNumber] = 0;
    }
    
    shellCounts[shellNumber] += parseInt(electronCount);
  }
  
  return shellCounts;
}

/**
 * Expands noble gas notation in electron configurations
 * @param config The electron configuration string (e.g., "[Ar] 4s2 3d10")
 * @returns The expanded electron configuration
 */
function expandNobleGasNotation(config: string): string {
  // If the configuration doesn't use noble gas notation, return as is
  if (!config.includes('[')) {
    return config;
  }
  
  // Noble gas configurations
  const nobleGases: Record<string, string> = {
    '[He]': '1s2',
    '[Ne]': '1s2 2s2 2p6',
    '[Ar]': '1s2 2s2 2p6 3s2 3p6',
    '[Kr]': '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6',
    '[Xe]': '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6',
    '[Rn]': '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6',
  };
  
  // Find the noble gas notation
  const nobleGasMatch = config.match(/\[([A-Z][a-z]?)\]/);
  
  if (nobleGasMatch) {
    const nobleGasSymbol = nobleGasMatch[0];
    const replacement = nobleGases[nobleGasSymbol] || '';
    
    // Replace the noble gas notation with its full configuration
    return config.replace(nobleGasSymbol, replacement);
  }
  
  return config;
} 