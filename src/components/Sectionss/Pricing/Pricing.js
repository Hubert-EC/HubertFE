import React from 'react';
import { Button } from '../../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Gói khởi động</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>một tháng</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>....</PricingCardFeature>
                  <PricingCardFeature>....</PricingCardFeature>
                  <PricingCardFeature>....</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Chọn gói</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gói thành viên vàng</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>một tháng</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>....</PricingCardFeature>
                  <PricingCardFeature>....</PricingCardFeature>
                  <PricingCardFeature>....</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Chọn gói</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Gói V.I.P</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>một tháng</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>....</PricingCardFeature>
                  <PricingCardFeature>....</PricingCardFeature>
                  <PricingCardFeature>....</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Chọn gói</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
