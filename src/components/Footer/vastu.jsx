import React from "react";
import "./vastu.css";

// HERO BANNER
import vastuBanner from "../../assets/vastu-bg.png";

// OFFICE IMAGES
import vastuOfficeImg from "../../assets/vastu-office.png";
import vastuImg3 from "../../assets/vastu-office2.png";

// MALL IMAGES
import vastuMall1 from "../../assets/vastu-office.png";
import vastuMall2 from "../../assets/vastu-office2.png";

const VastuInterior = () => {
  return (
    <div className="vastu-page">

      {/* ================= HERO SECTION ================= */}
      <section className="vastu-hero">
        <div className="vastu-overlay"></div>

        <img src={vastuBanner} alt="Vastu Interior Banner" className="vastu-hero-image" />

        <h1 className="vastu-title">Vastu For Interior</h1>
        <p className="vastu-breadcrumb">Home ~ Vastu For Interior</p>
      </section>

      {/* ================= TEXT SECTION ================= */}
      <section className="vastu-text-section">
        <p>Vastu Shastra is collective science of architecture contains the forces which act upon a given specific space through flow of positive energy. Vaastu is process to follow systematic approach, which affected our daily life on a positive way.</p>

        <p>Vastu is an ancient Indian science of enhancing positive and eliminating negative energies in and around a place or person; and the more positive energies are around you, the more abundance is attracted towards you.</p>

        <p>This negative energy starts to affect you physically, spiritually and mentally. When we do interior of any home or commercial organization, we must follow certain vastu methods to avoid negative impact.</p>

        <p>Below are some good vastu tips for each specific area which can be affected by negative energy:</p>
      </section>

      {/* ================= SUB SECTION ================= */}
      <section className="vastu-subsection">
        <h2 className="vastu-sub-title">Vastu for Interior</h2>

        <div className="vastu-options">
          <p>👉 Vastu for Commercial units Interior</p>
          <p> Vastu for Residential units Interior</p>
        </div>

        <h3 className="vastu-main-heading">Vastu for Commercial units Interior</h3>
      </section>

      {/* ==================== VASTU FOR OFFICE ==================== */}
      <section className="vastu-office">
        <h2 className="vastu-office-title">VASTU FOR OFFICE</h2>

        {/* ROW 1 */}
        <div className="vastu-office-row">
          <ul className="vastu-office-points">
            <li>Avoid irregular shape of the plot while square or rectangle is best for office structure.</li>
            <li>Water resource or element must be placed or installed in North-east of the office.</li>
            <li>The main head or owner must face North while working or dealing with clientele.</li>
            <li>Northern or eastern sides are suitable for executive and other staff.</li>
            <li>Managers should sit in Southern or Western portion so they face North or East.</li>
          </ul>

          <div className="vastu-office-image">
            <img src={vastuOfficeImg} alt="Vastu Office" />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="vastu-office-row vastu-row-reverse">
          <div className="vastu-office-image">
            <img src={vastuImg3} alt="Vastu Office Interior" />
          </div>

          <ul className="vastu-office-points">
            <li>North-east portion of office should be left empty with water resource installed.</li>
            <li>Toilets should be built in West or North-west; avoid South-east and North-east.</li>
            <li>Pantry should be constructed in South-east.</li>
            <li>Reception must be designed in North-east.</li>
            <li>Waiting room should be in North-west or North-east.</li>
            <li>Office colours should be pleasing and bright to avoid dullness.</li>
            <li>Avoid war or negative pictures; use positive and attractive paintings.</li>
          </ul>
        </div>
      </section>

      {/* ==================== VASTU FOR MALL ==================== */}
      <section className="vastu-office">
        <h2 className="vastu-office-title">VASTU FOR MALL</h2>

        {/* ROW 1 */}
        <div className="vastu-office-row">
          <ul className="vastu-office-points">
            <li>The Restaurant should be preferably in the South-West of the building and the Kitchen within it should be in the South-East.</li>
            <li>Installation of Air-Conditioning(AC) Plant should be preferably in the South-East.</li>
            <li>Generator, Transformer and other Electrical Installationscshould be done in the South-East </li>
            <li>Toilet blocks should be in the North-East.</li>
          </ul>

          <div className="vastu-office-image">
            <img src={vastuOfficeImg} alt="Vastu Office" />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="vastu-office-row vastu-row-reverse">
          <div className="vastu-office-image">
            <img src={vastuImg3} alt="Vastu Office Interior" />
          </div>

          <ul className="vastu-office-points">
            <li>Landscaping and Fountains or Artificial Water Falls can be Constructed in the North-East, North or East of the entire site.</li>
            <li>Theatres should have a slope or the arrangements of the seats such that the screen is in North or the East.</li>
            <li>The Central part of the Building should have enough lighting from the Top (Skylight).</li>
          </ul>
        </div>
      </section>

      {/* ==================== VASTU FOR INSTITUTION ==================== */}
      <section className="vastu-office">
        <h2 className="vastu-office-title">VASTU FOR INSTITUTION</h2>

        {/* ROW 1 */}
        <div className="vastu-office-row">
          <ul className="vastu-office-points">
            <li>Leave more space towards thje East and North-East while other parts like South, West and South-West must be used for construction.</li>
            <li>Library in the institute can be made in Western portion.</li>
            <li>Classrooms should be made with entrance in East and blackboard in West.</li>
            <li>Beams in the classroom must be constructed carefully ensuring that no student sit under the beam.</li>
            <li>Staff room be made in North-West.</li>
            <li>Pantry canteen in the institute should be made in South-East corner.</li>
          </ul>

          <div className="vastu-office-image">
            <img src={vastuOfficeImg} alt="Vastu Office" />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="vastu-office-row vastu-row-reverse">
          <div className="vastu-office-image">
            <img src={vastuImg3} alt="Vastu Office Interior" />
          </div>

          <ul className="vastu-office-points">
            <li>Owner or principal's office must be constructed in South-West or South direction only so that she/he can sit facing North.</li>
            <li>Platform of teacher's desk must be made some feet high from the ground.</li>
            <li>Meeting rooms must be situated in North with east facing door.</li>
            <li>Open play ground should be constructed in the Eastern portion.</li>
            <li>Reception and cashier room must be constructed in the Eastern portion.</li>
          </ul>
        </div>
      </section>

      {/* ==================== VASTU FOR SCHOOL ==================== */}
      <section className="vastu-office">
        <h2 className="vastu-office-title">VASTU FOR SCHOOL</h2>

        {/* ROW 1 */}
        <div className="vastu-office-row">
          <ul className="vastu-office-points">
            <li>Leave more space towards thje East and North-East while other parts like South, West and South-West must be used for construction.</li>
            <li>Library in the institute can be made in Western portion.</li>
            <li>Classrooms should be made with entrance in East and blackboard in West.</li>
            <li>Beams in the classroom must be constructed carefully ensuring that no student sit under the beam.</li>
            <li>Staff room be made in North-West.</li>
            <li>Pantry canteen in the institute should be made in South-East corner.</li>
          </ul>

          <div className="vastu-office-image">
            <img src={vastuOfficeImg} alt="Vastu Office" />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="vastu-office-row vastu-row-reverse">
          <div className="vastu-office-image">
            <img src={vastuImg3} alt="Vastu Office Interior" />
          </div>

          <ul className="vastu-office-points">
            <li>Owner or principal's office must be constructed in South-West or South direction only so that she/he can sit facing North.</li>
            <li>Platform of teacher's desk must be made some feet high from the ground.</li>
            <li>Meeting rooms must be situated in North with east facing door.</li>
            <li>Open play ground should be constructed in the Eastern portion.</li>
            <li>Reception and cashier room must be constructed in the Eastern portion.</li>
          </ul>
        </div>
      </section>

      {/* ==================== VASTU FOR CLINIC ==================== */}
      <section className="vastu-office">
        <h2 className="vastu-office-title">VASTU FOR CLINIC</h2>

        {/* ROW 1 */}
        <div className="vastu-office-row">
          <ul className="vastu-office-points">
            <li>The waiting area should be in the north-east ensure patients will not fell agitated or disturbed. Placing this area in the south-east, then fire quadrant, would cause unhappiness.</li>
            <li>Auspicious locations for the doctor are thr south-east, south, and west. Facing north-east when treating patients enhances concentration. Facing east is also allowed.</li>
            <li>A clinic's main entrance should be in the north-east, east or north. This will allow patients to seek consultation without fear and uncertainity. Other choices for the entrance are south-east, south or west.</li>
          </ul>

          <div className="vastu-office-image">
            <img src={vastuOfficeImg} alt="Vastu Office" />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="vastu-office-row vastu-row-reverse">
          <div className="vastu-office-image">
            <img src={vastuImg3} alt="Vastu Office Interior" />
          </div>

          <ul className="vastu-office-points">
            <li>The doctor's chair should not be black, grey or blue. These colours are regarded as depressing and negative in Vasthu and should also be avoided in the floor and in carpets.</li>
            <li>The right wall colours can help ensure those seeking treatment wait patiently. Recommended colours are light green, pink and blue as these have cooling and calming effects. Avoid Dark yellow and white as they can cause tension. Cheerful and scenic photographs or pictures should be hung on the walls.</li>
            <li>The examination table should be placed in the north-west corner of the examination room and the patient should be made to lie down with his or her head towards the east and legs towards the west.</li>
          </ul>
        </div>
      </section>

      {/* ==================== VASTU FOR MARRIAGE HALL ==================== */}
      <section className="vastu-office">
        <h2 className="vastu-office-title">VASTU FOR MARRIAGE HALL</h2>

        {/* ROW 1 */}
        <div className="vastu-office-row">
          <ul className="vastu-office-points">
            <li>Entrance is ideal in East or North direction.</li>
            <li>Plot of the marriage hall should be in regular shape for instance squatre or rectangle while avoid round or oval shape banquet hall just for the sake of decoration.</li>
            <li>Electrical equipments including dance floor, music system and even transformer must be located in South-East.</li>
            <li>Cooking arrangement must also be in South-East.</li>
          </ul>

          <div className="vastu-office-image">
            <img src={vastuOfficeImg} alt="Vastu Office" />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="vastu-office-row vastu-row-reverse">
          <div className="vastu-office-image">
            <img src={vastuImg3} alt="Vastu Office Interior" />
          </div>

          <ul className="vastu-office-points">
            <li>Parking should be constructed in North-West or South-East.</li>
            <li>Arrangement for food and snacks should be directed towards North-West or North.</li>
            <li>Sitting arrangement for guests must be in South-West or it could be in North.</li>
            <li>Mandap for marriage must be arranged in North-East being the Ishaan corner and sacred place while file must be burn in South-East corner.</li>
          </ul>
        </div>
      </section>

      {/* ==================== VASTU FOR HOSPITAL ==================== */}
      <section className="vastu-office">
        <h2 className="vastu-office-title">VASTU FOR HOSPITAL</h2>

        {/* ROW 1 */}
        <div className="vastu-office-row">
          <ul className="vastu-office-points">
            <li>Construction of operation theatre should be done in Western portion of hospital.</li>
            <li>All the medical equipments must be placed in South-east of hospital room.</li>
            <li>Patient's room should be ventilated with more windows from Eastern sides.</li>
            <li>Store room in the hospital should be placed above the ground and all the equipments, medications, apparatus etc should be arranged in South-west or West.</li>
            <li>ICU and recovery rooms should be built in South-west portion of hospital for quick recovery.</li>
          </ul>

          <div className="vastu-office-image">
            <img src={vastuOfficeImg} alt="Vastu Office" />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="vastu-office-row vastu-row-reverse">
          <div className="vastu-office-image">
            <img src={vastuImg3} alt="Vastu Office Interior" />
          </div>

          <ul className="vastu-office-points">
            <li>Construction of operation theatre should be done in Western portion of hospital.</li>
            <li>All the medical equipments must be placed in South-east of hospital room.</li>
            <li>Patient's room should be ventilated with more windows from Eastern sides.</li>
            <li>Store room in the hospital should be placed above the ground and all the equipments, medications, apparatus etc should be arranged in South-west or West.</li>
            <li>ICU and recovery rooms should be built in South-west portion of hospital for quick recovery.</li>
          </ul>
        </div>
      </section>

      {/* ==================== VASTU FOR BANK ==================== */}
      <section className="vastu-office">
        <h2 className="vastu-office-title">VASTU FOR BANK</h2>

        {/* ROW 1 */}
        <div className="vastu-office-row">
          <ul className="vastu-office-points">
            <li>Avoid any kind of obstruction in the main door of bank and entrance is recommended towards East or North-east or North.</li>
            <li>South-east corner of bank should be made into Manager's room and person sitting their face towards North.</li>
            <li>Cash counter must be placed in North with cashier facing East or North-east.</li>
            <li>The main cash room where all the cash is accumulated must be placed in South or South-west opening towards North.</li>
            <li>There should always be some water source in North-east which is most auspicious.</li>
          </ul>

          <div className="vastu-office-image">
            <img src={vastuOfficeImg} alt="Vastu Office" />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="vastu-office-row vastu-row-reverse">
          <div className="vastu-office-image">
            <img src={vastuImg3} alt="Vastu Office Interior" />
          </div>

          <ul className="vastu-office-points">
            <li>Color play a significant role in making and stabilizing wealth matters, so Yellow is prominent colour.</li>
            <li>Things like files, papers and other junk stuff must be kept at South-west.</li>
            <li>Stationary can be placed in North-west corner.</li>
            <li>Cash deposit counters must be located in the North direction of bank.</li>
            <li>Payment counters can placed western portion.</li>
            <li>Keep stairs in West, South-west or South-east.</li>
          </ul>
        </div>
      </section>

      {/* ==================== VASTU FOR MULTIPLEX ==================== */}
      <section className="vastu-office">
        <h2 className="vastu-office-title">VASTU FOR MULTIPLEX</h2>

        {/* ROW 1 */}
        <div className="vastu-office-row">
          <ul className="vastu-office-points">
            <li>The Theatres should have a slope or the arrangements of the seats sich that the screen is in the North or the East.</li>
            <li>The Restaurant should be preferably in the South-West of the Building and the Kitchen within it should be in the South-East.</li>
            <li>Installation of Air-Conditioning (AC) Plant should be preferably in the South_East.</li>
            <li>Generator, Transformer and other Electrical Installations should also be done in the South-East part.</li>
          </ul>

          <div className="vastu-office-image">
            <img src={vastuOfficeImg} alt="Vastu Office" />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="vastu-office-row vastu-row-reverse">
          <div className="vastu-office-image">
            <img src={vastuImg3} alt="Vastu Office Interior" />
          </div>

          <ul className="vastu-office-points">
            <li>Toilet blocks should be in the North-West.</li>
            <li>Landscaping and Fountains or Artificial Water Falls can be constructed in the North-East or East of the entire site.</li>
            <li>The Central part of the Building should have enough lighting from the Top (Skylight).</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default VastuInterior;
