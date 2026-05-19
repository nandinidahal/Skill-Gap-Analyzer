function Logo() {
  return (
    <svg width="220" height="60" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      <rect x="5" y="10" width="40" height="40" rx="10" fill="#FFFFFF" stroke="#E5E7EB"/>

      <circle cx="18" cy="25" r="3.2" fill="#6366F1"/>
      <circle cx="30" cy="20" r="3.2" fill="#6366F1"/>
      <circle cx="32" cy="35" r="3.2" fill="#6366F1"/>
      <circle cx="18" cy="38" r="3.2" fill="#6366F1"/>

      <path d="M18 25 L30 20 L32 35 L18 38 Z"
        stroke="#D1D5DB"
        strokeWidth="1.2"
        fill="none"/>

      <path d="M12 42 L20 35 L28 38 L38 18"
        stroke="#6366F1"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"/>

      <text x="55" y="35" fontSize="16" fontWeight="600" fill="#111827">
        SkillGap
      </text>

      <text x="120" y="35" fontSize="16" fontWeight="500" fill="#0d47a1">
        Analyzer
      </text>

    </svg>
  );
}

export default Logo;