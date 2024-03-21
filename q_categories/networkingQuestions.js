const networking_questions = [
  {
    question: "What is the range for Class A IP addresses?",
    answer: "1.0.0.1 to 126.255.255.254",
    category: "ipAddressClassesRange"
  },
  {
    question: "What is the range for Class B IP addresses?",
    answer: "128.1.0.1 to 191.255.255.254",
    category: "ipAddressClassesRange"
  },
  {
    question: "What is the range for Class C IP addresses?",
    answer: "192.0.1.1 to 223.255.254.254",
    category: "ipAddressClassesRange"
  },
  {
    question: "What is the range for Class D IP addresses?",
    answer: "224.0.0.0 to 239.255.255.255",
    category: "ipAddressClassesRange"
  },
  {
    question: "What is the range for Class E IP addresses?",
    answer: "240.0.0.0 to 254.255.255.254",
    category: "ipAddressClassesRange"
  },
  {
    question: "What is the subnet mask for Class A IP addresses?",
    answer: "255.0.0.0",
    category: "ipAddressClassesSubnet"
  },
  {
    question: "What is the subnet mask for Class B IP addresses?",
    answer: "255.255.0.0",
    category: "ipAddressClassesSubnet"
  },
  {
    question: "What is the subnet mask for Class C IP addresses?",
    answer: "255.255.255.0",
    category: "ipAddressClassesSubnet"
  },
  {
    question: "What is the loopback address?",
    answer: "127.0.0.1",
    category: "ipAddressClassesSubnet"
  },
  {
    question: "Which IP address class supports 16 million hosts on each of 127 networks?",
    answer: "Class A",
    category: "ipAddressClassesCapacity"
  },
  {
    question: "Which IP address class supports 65,000 hosts on each of 16,000 networks?",
    answer: "Class B",
    category: "ipAddressClassesCapacity"
  },
  {
    question: "Which IP address class supports 254 hosts on each of 2 million networks?",
    answer: "Class C",
    category: "ipAddressClassesCapacity"
  },
  {
    question: "Which IP address class is reserved for multicast groups?",
    answer: "Class D",
    category: "ipAddressClassesCapacity"
  },
  {
    question: "Which IP address class is reserved for future use, or Research and Development Purposes?",
    answer: "Class E",
    category: "ipAddressClassesCapacity"
  },
  {
    question: "What command logs you into enable mode, also known as user exec mode or privileged mode?",
    answer: "enable",
    category: "ciscoRouterCommands"
  },
  {
    question: "What command logs you into configuration mode?",
    answer: "configure terminal",
    category: "ciscoRouterCommands"
  },
  {
    question: "What command enters interface configuration mode for the specified fast Ethernet interface?",
    answer: "interface",
    category: "ciscoRouterCommands"
  },
  {
    question: "What command sets a hostname to the current Cisco network device?",
    answer: "hostname",
    category: "ciscoRouterCommands"
  },
  {
    question: "What enable mode command saves the active config, replacing the startup config when a Cisco network device initializes?",
    answer: "copy running-config startup-config",
    category: "ciscoRouterCommands"
  },
  {
    question: "What command assigns an IP address and a subnet mask?",
    answer: "ip address",
    category: "ciscoRouterCommands"
  },
  {
    question: "What command is used in interface configuration mode to shut down or bring up the interface?",
    answer: "no shutdown",
    category: "ciscoRouterCommands"
  },
  {
    question: "What command displays the usability status of interfaces configured for IP?",
    answer: "show ip interface",
    category: "ciscoRouterCommands"
  },
  {
    question: "What command configures a DHCP address pool on a DHCP server and enters DHCP pool configuration mode?",
    answer: "ip dhcp pool",
    category: "ciscoRouterCommands"
  },
  {
    question: "What command, used in DHCP pool configuration mode, configures the network number and mask for a DHCP address pool primary or secondary subnet on a Cisco IOS DHCP server?",
    answer: "network",
    category: "ciscoRouterCommands"
  },
  {
    question: "What command specifies IP addresses that a DHCP server should not assign to DHCP clients?",
    answer: "ip dhcp excluded-address",
    category: "ciscoRouterCommands"
  },
  {
    question: "What command, used in DHCP pool configuration mode, specifies the default router list for a DHCP client?",
    answer: "default-router",
    category: "ciscoRouterCommands"
  },
  {
    question: "What command defines the password required when using the enable command?",
    answer: "enable password",
    category: "ciscoRouterCommands"
  },
  {
    question: "What command sets the Cisco device password required for any user to enter enable mode?",
    answer: "enable secret",
    category: "ciscoRouterCommands"
  },
  {
    question: "What command, used in enable mode, is used to diagnose basic network connectivity?",
    answer: "ping",
    category: "ciscoRouterCommands"
  }
];

export default networking_questions;
